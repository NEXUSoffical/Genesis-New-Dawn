import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import Stripe from 'https://esm.sh/stripe@14.14.0?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0';

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const stripeKey = Deno.env.get('STRIPE_SECRET_KEY');
  const endpointSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

  if (!stripeKey || !endpointSecret || !supabaseUrl || !supabaseServiceKey) {
    console.error('Missing required environment secrets in Supabase Edge Functions');
    return new Response('Server configuration error', { status: 500 });
  }

  const stripe = new Stripe(stripeKey, {
    apiVersion: '2023-10-16',
    httpClient: Stripe.createFetchHttpClient(),
  });

  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return new Response('Missing stripe-signature header', { status: 400 });
  }

  const body = await req.text();
  let event: Stripe.Event;

  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, endpointSecret);
  } catch (err: any) {
    console.error(`⚠️ Webhook signature verification failed: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Initialize privileged Supabase Admin client
  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

  // Handle successful checkout
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata || {};

    const userId = metadata.userId;
    const packId = metadata.packId || 'unknown';
    const coins = parseInt(metadata.coins || '0', 10);
    const amountCents = session.amount_total || 0;
    const currency = session.currency || 'usd';
    const customerEmail = session.customer_details?.email || session.customer_email || 'unknown';

    console.log(`Processing verified checkout for user: ${userId}, pack: ${packId}, coins: ${coins}`);

    if (coins > 0 && userId && userId !== 'anonymous') {
      const { data, error } = await supabaseAdmin.rpc('fulfill_coin_purchase', {
        p_user_id: userId,
        p_stripe_session_id: session.id,
        p_pack_id: packId,
        p_coins: coins,
        p_amount_cents: amountCents,
        p_currency: currency,
        p_customer_email: customerEmail,
      });

      if (error) {
        console.error('Error invoking fulfill_coin_purchase RPC:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
      }

      console.log('Successfully fulfilled coins purchase:', data);
    } else {
      console.warn('Checkout completed but missing valid userId or coin amount:', { userId, coins });
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
});
