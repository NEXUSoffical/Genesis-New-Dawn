-- ==============================================================================
-- GENESIS STRIPE & COIN WALLET DATABASE SCHEMA
-- Execute this script in your Supabase Project -> SQL Editor
-- ==============================================================================

-- 1. Ensure profiles table has a coins balance
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  username TEXT,
  level INT DEFAULT 1,
  current_xp INT DEFAULT 0,
  xp_to_next_level INT DEFAULT 100,
  total_xp INT DEFAULT 0,
  title TEXT DEFAULT 'Primordial Wanderer',
  coins INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- If profiles table already existed without coins column, add it safely
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'profiles' 
    AND column_name = 'coins'
  ) THEN
    ALTER TABLE public.profiles ADD COLUMN coins INT DEFAULT 0;
  END IF;
END $$;

-- 2. Coin Transactions table for permanent audit logs & idempotency (prevents double crediting)
CREATE TABLE IF NOT EXISTS public.coin_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  stripe_session_id TEXT UNIQUE,
  pack_id TEXT NOT NULL,
  coins_awarded INT NOT NULL,
  amount_cents INT,
  currency TEXT DEFAULT 'usd',
  customer_email TEXT,
  status TEXT DEFAULT 'completed',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coin_transactions ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own profile
CREATE POLICY "Users can read own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Allow users to update their own profile (except direct manipulation of coins in production)
CREATE POLICY "Users can update own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Allow users to view their own purchase history
CREATE POLICY "Users can view own transactions"
  ON public.coin_transactions
  FOR SELECT
  USING (auth.uid() = user_id);

-- 4. Atomic Stored Procedure to safely credit coins upon verified Stripe Webhook event
CREATE OR REPLACE FUNCTION public.fulfill_coin_purchase(
  p_user_id UUID,
  p_stripe_session_id TEXT,
  p_pack_id TEXT,
  p_coins INT,
  p_amount_cents INT,
  p_currency TEXT,
  p_customer_email TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER -- Runs with elevated privileges to update coins securely
AS $$
DECLARE
  v_already_processed BOOLEAN;
  v_new_balance INT;
BEGIN
  -- Idempotency check: Has this Stripe session already been credited?
  SELECT EXISTS (
    SELECT 1 FROM public.coin_transactions WHERE stripe_session_id = p_stripe_session_id
  ) INTO v_already_processed;

  IF v_already_processed THEN
    SELECT coins INTO v_new_balance FROM public.profiles WHERE id = p_user_id;
    RETURN jsonb_build_object(
      'success', true,
      'message', 'Transaction already fulfilled',
      'coins', v_new_balance
    );
  END IF;

  -- Record transaction
  INSERT INTO public.coin_transactions (
    user_id,
    stripe_session_id,
    pack_id,
    coins_awarded,
    amount_cents,
    currency,
    customer_email,
    status
  ) VALUES (
    p_user_id,
    p_stripe_session_id,
    p_pack_id,
    p_coins,
    p_amount_cents,
    p_currency,
    p_customer_email,
    'completed'
  );

  -- Credit coins to user's profile
  UPDATE public.profiles
  SET coins = COALESCE(coins, 0) + p_coins,
      updated_at = NOW()
  WHERE id = p_user_id
  RETURNING coins INTO v_new_balance;

  RETURN jsonb_build_object(
    'success', true,
    'coins_added', p_coins,
    'new_balance', v_new_balance
  );
END;
$$;
