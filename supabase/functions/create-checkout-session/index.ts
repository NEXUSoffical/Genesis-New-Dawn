import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import Stripe from 'https://esm.sh/stripe@14.14.0?target=deno';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const COIN_PACKS_MAP: Record<string, { name: string; coins: number; amountCents: number }> = {
  coins_400: { name: 'Genesis Pouch of Coins', coins: 400, amountCents: 499 },
  coins_1000: { name: 'Genesis Chest of Coins (+150 Bonus)', coins: 1000, amountCents: 999 },
  coins_2500: { name: 'Genesis Vault of Coins (+500 Bonus)', coins: 2500, amountCents: 1999 },
  coins_6000: { name: 'Treasury of Genesis (BEST VALUE)', coins: 6000, amountCents: 4499 }
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY');
    if (!stripeKey) {
      throw new Error('STRIPE_SECRET_KEY environment variable is not set in Supabase Secrets.');
    }

    const stripe = new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
      httpClient: Stripe.createFetchHttpClient(),
    });

    const { packId, userId, userEmail, returnUrl } = await req.json();

    if (!packId || !COIN_PACKS_MAP[packId]) {
      return new Response(JSON.stringify({ error: `Invalid packId: ${packId}` }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const pack = COIN_PACKS_MAP[packId];
    const baseUrl = returnUrl || 'https://kieranbentley1999.github.io/Genesis-New-Dawn';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: userEmail || undefined,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: pack.name,
              description: `Instant digital credit of 🪙 ${pack.coins.toLocaleString()} Genesis Coins for in-game avatars and items.`,
              images: ['https://raw.githubusercontent.com/NEXUSoffical/Genesis-New-Dawn/main/logo.jpg']
            },
            unit_amount: pack.amountCents,
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId: userId || 'anonymous',
        packId: packId,
        coins: pack.coins.toString(),
      },
      success_url: `${baseUrl}?payment_status=success&session_id={CHECKOUT_SESSION_ID}&pack_id=${packId}&coins=${pack.coins}`,
      cancel_url: `${baseUrl}?payment_status=cancelled`,
    });

    return new Response(JSON.stringify({ url: session.url, sessionId: session.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (err: any) {
    console.error('Error creating checkout session:', err);
    return new Response(JSON.stringify({ error: err.message || 'Internal Server Error' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
