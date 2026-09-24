# ⚡ Genesis Stripe & Supabase Integration Guide

This guide walks you through connecting your Stripe account to Genesis so players can securely purchase Genesis Coins with real currency (Apple Pay, Google Pay, credit cards) and have their balances updated permanently and securely.

---

## 🚀 Quick Setup (3 Simple Steps)

### Step 1: Run Database Schema in Supabase
1. Open your [Supabase Dashboard](https://supabase.com/dashboard).
2. Select your Genesis project (`https://hdhtrtklwfkvgebdlbfi.supabase.co`).
3. Click **SQL Editor** in the left sidebar.
4. Copy the entire contents of [`supabase/schema.sql`](./schema.sql) and click **Run**.
   - This creates the `coins` balance column, audit transaction log, and secure `fulfill_coin_purchase` stored procedure.

---

### Step 2: Set Your Stripe Secrets in Supabase
In your terminal (or in the Supabase Dashboard under **Project Settings -> Edge Functions -> Secrets**):

```bash
# Set your Stripe Secret Key (from https://dashboard.stripe.com/apikeys)
supabase secrets set STRIPE_SECRET_KEY="sk_live_..."

# Set your Stripe Webhook Secret (from Step 3 below)
supabase secrets set STRIPE_WEBHOOK_SECRET="whsec_..."
```

---

### Step 3: Deploy Edge Functions & Configure Webhook

1. Deploy the functions to Supabase:
   ```bash
   supabase functions deploy create-checkout-session --no-verify-jwt
   supabase functions deploy stripe-webhook --no-verify-jwt
   ```

2. Register the Webhook in Stripe:
   - Go to [Stripe Dashboard -> Developers -> Webhooks](https://dashboard.stripe.com/webhooks).
   - Click **Add endpoint**.
   - Set **Endpoint URL** to:
     `https://hdhtrtklwfkvgebdlbfi.supabase.co/functions/v1/stripe-webhook`
   - Select event: `checkout.session.completed`.
   - Copy the **Signing secret** (`whsec_...`) and save it to your Supabase secrets as `STRIPE_WEBHOOK_SECRET`.

---

## 💳 Alternative: Instant Stripe Payment Links (No CLI Needed!)
If you prefer not to deploy Supabase Edge Functions right away:
1. In your [Stripe Dashboard -> Payment Links](https://dashboard.stripe.com/payment-links), create 4 payment links:
   - 400 Coins ($4.99)
   - 1,000 Coins ($9.99)
   - 2,500 Coins ($19.99)
   - 6,000 Coins ($44.99)
2. In Genesis, click **Settings / Coin Settings** and paste your Stripe Payment Link URLs.
3. Set the redirect after payment in Stripe to:
   `https://kieranbentley1999.github.io/Genesis-New-Dawn/?payment_status=success`
