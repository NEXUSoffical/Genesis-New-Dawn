import { ItemType, MarketItem } from './types';

export class EconomyEngine {
  public items: Map<ItemType, MarketItem> = new Map();
  public treasuryCoins: number = 0;
  public totalGdp: number = 0;
  public transactionCount: number = 0;
  public isCurrencyUnlocked: boolean = false;

  constructor() {
    this.initMarket();
  }

  private initMarket(): void {
    const marketSetup: { item: ItemType; name: string; category: MarketItem['category']; basePrice: number }[] = [
      // Food
      { item: 'berries', name: 'Fresh Berries', category: 'food', basePrice: 1 },
      { item: 'raw_meat', name: 'Raw Hunted Meat', category: 'food', basePrice: 3 },
      { item: 'cooked_meat', name: 'Roast Steak', category: 'food', basePrice: 6 },
      { item: 'harvested_wheat', name: 'Raw Wheat', category: 'food', basePrice: 2 },
      { item: 'flour', name: 'Ground Flour', category: 'food', basePrice: 3 },
      { item: 'bread', name: 'Baked Loaf', category: 'food', basePrice: 6 },
      { item: 'cooked_food', name: 'Roast Food', category: 'food', basePrice: 3 },

      // Animal Products & Hunting
      { item: 'animal_hide', name: 'Animal Pelt', category: 'material', basePrice: 4 },
      { item: 'raw_wool', name: 'Sheared Wool', category: 'material', basePrice: 4 },
      { item: 'bone', name: 'Animal Bone', category: 'material', basePrice: 2 },
      { item: 'tanned_leather', name: 'Tanned Leather', category: 'material', basePrice: 8 },

      // Basic Materials
      { item: 'stick', name: 'Wood Sticks', category: 'material', basePrice: 1 },
      { item: 'stone', name: 'Rough Stone', category: 'material', basePrice: 1 },
      { item: 'flint', name: 'Sharp Flint', category: 'material', basePrice: 2 },
      { item: 'clay', name: 'River Clay', category: 'material', basePrice: 2 },
      { item: 'wood_log', name: 'Hardwood Log', category: 'material', basePrice: 3 },
      { item: 'firewood', name: 'Split Firewood', category: 'material', basePrice: 2 },

      // Refined Construction
      { item: 'mud_brick', name: 'Sun-Dried Brick', category: 'construction', basePrice: 3 },
      { item: 'timber_plank', name: 'Milled Timber', category: 'construction', basePrice: 4 },
      { item: 'cut_stone', name: 'Chiseled Stone', category: 'construction', basePrice: 5 },

      // Ores & Metals
      { item: 'copper_ore', name: 'Copper Ore', category: 'material', basePrice: 4 },
      { item: 'copper_ingot', name: 'Copper Ingot', category: 'material', basePrice: 9 },
      { item: 'iron_ore', name: 'Iron Ore', category: 'material', basePrice: 6 },
      { item: 'iron_ingot', name: 'Iron Ingot', category: 'material', basePrice: 14 },
      { item: 'gold_ore', name: 'Gold Ore', category: 'material', basePrice: 12 },

      // Tools & Manufactured
      { item: 'stone_axe', name: 'Stone Axe', category: 'tool', basePrice: 5 },
      { item: 'flint_spear', name: 'Flint Spear', category: 'tool', basePrice: 6 },
      { item: 'woven_basket', name: 'Woven Basket', category: 'tool', basePrice: 5 },
      { item: 'clay_pot', name: 'Earthenware Pot', category: 'tool', basePrice: 4 },
      { item: 'copper_axe', name: 'Bronze Axe', category: 'tool', basePrice: 16 },
      { item: 'iron_tools', name: 'Iron Forged Tools', category: 'tool', basePrice: 24 },
      { item: 'fine_clothes', name: 'Tailored Robes', category: 'luxury', basePrice: 35 },
    ];

    for (const entry of marketSetup) {
      this.items.set(entry.item, {
        item: entry.item,
        name: entry.name,
        category: entry.category,
        basePrice: entry.basePrice,
        currentPrice: entry.basePrice,
        supply: 10,
        demand: 10,
        totalVolumeTraded: 0,
        history: [entry.basePrice],
      });
    }
  }

  public registerSupply(item: ItemType, quantity = 1): void {
    const data = this.items.get(item);
    if (!data) return;
    data.supply += quantity;
  }

  public registerDemand(item: ItemType, quantity = 1): void {
    const data = this.items.get(item);
    if (!data) return;
    data.demand += quantity;
  }

  public executeTrade(item: ItemType, quantity: number, buyerCoins: number): { success: boolean; cost: number } {
    const data = this.items.get(item);
    if (!data) return { success: false, cost: 0 };

    const unitPrice = data.currentPrice;
    const totalCost = unitPrice * quantity;

    if (this.isCurrencyUnlocked) {
      if (buyerCoins < totalCost) return { success: false, cost: totalCost };
    }

    // Trade successful
    data.supply = Math.max(1, data.supply - quantity);
    data.demand += quantity;
    data.totalVolumeTraded += quantity;
    this.transactionCount++;
    this.totalGdp += totalCost;

    return { success: true, cost: totalCost };
  }

  public updateMarketTicks(): void {
    // Recompute dynamic supply & demand prices smoothly
    for (const data of this.items.values()) {
      const ratio = data.demand / Math.max(1, data.supply);
      // Dampened price response curve
      let targetPrice = data.basePrice * Math.pow(ratio, 0.45);

      // Boundary limits: between 0.3x base and 5x base
      targetPrice = Math.max(Math.round(data.basePrice * 0.4), Math.min(Math.round(data.basePrice * 4.5), Math.round(targetPrice)));

      // Smooth step toward target
      data.currentPrice = Math.round(data.currentPrice * 0.85 + targetPrice * 0.15);
      if (data.currentPrice < 1) data.currentPrice = 1;

      // Soft decay towards equilibrium
      data.supply = Math.max(5, Math.round(data.supply * 0.95 + 2));
      data.demand = Math.max(5, Math.round(data.demand * 0.95 + 2));

      // Append to history
      data.history.push(data.currentPrice);
      if (data.history.length > 20) {
        data.history.shift();
      }
    }
  }

  public getPrice(item: ItemType): number {
    return this.items.get(item)?.currentPrice ?? 1;
  }

  public unlockCurrency(): void {
    this.isCurrencyUnlocked = true;
    this.treasuryCoins = 50; // Initial municipal fund
  }
}
