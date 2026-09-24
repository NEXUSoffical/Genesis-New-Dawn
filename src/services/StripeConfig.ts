export interface CoinPackInfo {
  id: string;
  name: string;
  coins: number;
  bonusText?: string;
  priceUsd: string;
  priceInCents: number;
  icon: string;
  description: string;
  // Direct Stripe Payment Link (hosted by Stripe - works instantly on GitHub Pages or custom domain)
  paymentLink?: string;
  // Stripe Price ID (e.g. price_1N...) for checkout sessions
  stripePriceId?: string;
}

export interface StripeSettings {
  publishableKey: string;
  paymentMode: 'payment_link' | 'edge_function';
  customLinks: Record<string, string>; // packId -> Stripe Payment Link URL
}

const STORAGE_KEY_STRIPE_CONFIG = 'genesis_stripe_config';

export const DEFAULT_COIN_PACKS: CoinPackInfo[] = [
  {
    id: 'coins_400',
    name: 'Pouch of Coins',
    coins: 400,
    priceUsd: '£4.99',
    priceInCents: 499,
    icon: '💰',
    description: 'Perfect starter pack to acquire custom headgear or classic outfits.',
    paymentLink: 'https://buy.stripe.com/8x2bJ2ekGeEqbkI0mQ0Ba00'
  },
  {
    id: 'coins_1000',
    name: 'Chest of Coins',
    coins: 1000,
    bonusText: '+150 Bonus',
    priceUsd: '£9.99',
    priceInCents: 999,
    icon: '🪙',
    description: 'Popular choice! Unlock elite 3D gear and rare character custom parts.',
    paymentLink: 'https://buy.stripe.com/6oUcN6ccy53QfAYb1u0Ba01'
  },
  {
    id: 'coins_2500',
    name: 'Vault of Coins',
    coins: 2500,
    bonusText: '+500 Bonus',
    priceUsd: '£19.99',
    priceInCents: 1999,
    icon: '💎',
    description: 'Substantial treasure chest for avid world builders and explorers.',
    paymentLink: 'https://buy.stripe.com/aFacN62BY8g2coMedG0Ba02'
  },
  {
    id: 'coins_6000',
    name: 'Treasury of Genesis',
    coins: 6000,
    bonusText: 'BEST VALUE',
    priceUsd: '£44.99',
    priceInCents: 4499,
    icon: '👑',
    description: 'The ultimate royal treasury. Unlock all legendary gear and future cosmetics.',
    paymentLink: 'https://buy.stripe.com/dRm9AU90mdAmagE8Tm0Ba03'
  }
];

export function getStripeSettings(): StripeSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STRIPE_CONFIG);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        publishableKey: parsed.publishableKey || '',
        paymentMode: parsed.paymentMode || 'payment_link',
        customLinks: parsed.customLinks || {}
      };
    }
  } catch (e) {
    console.warn('Failed to parse Stripe config from localStorage:', e);
  }

  return {
    publishableKey: '',
    paymentMode: 'payment_link',
    customLinks: {}
  };
}

export function saveStripeSettings(settings: Partial<StripeSettings>): void {
  const current = getStripeSettings();
  const updated: StripeSettings = {
    ...current,
    ...settings,
    customLinks: {
      ...current.customLinks,
      ...(settings.customLinks || {})
    }
  };
  localStorage.setItem(STORAGE_KEY_STRIPE_CONFIG, JSON.stringify(updated));
}

export function getCoinPacks(): CoinPackInfo[] {
  const settings = getStripeSettings();
  return DEFAULT_COIN_PACKS.map(pack => {
    const rawCustom = settings.customLinks[pack.id];
    const customLink = (rawCustom && rawCustom.trim().startsWith('http')) ? rawCustom.trim() : null;
    return {
      ...pack,
      paymentLink: customLink || pack.paymentLink || ''
    };
  });
}
