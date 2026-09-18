import { CustomerOrder, DifficultyLevel, VillagerArchetype } from '../types';
import { SHOP_ITEMS, getRandomVillager } from '../economy/VillagerAI';

export class MathEngine {
  /**
   * Generates a procedurally crafted math problem tailored to the selected difficulty
   */
  public static generateOrder(difficulty: DifficultyLevel, lastVillagerId?: string): CustomerOrder {
    const customer = getRandomVillager(lastVillagerId);

    switch (difficulty) {
      case 'apprentice':
        return this.generateApprenticeOrder(customer);
      case 'journeyman':
        return this.generateJourneymanOrder(customer);
      case 'master':
        return this.generateMasterOrder(customer);
      default:
        return this.generateApprenticeOrder(customer);
    }
  }

  /**
   * APPRENTICE (Ages 5–7): Addition under 20, Counting, Simple Change
   */
  private static generateApprenticeOrder(customer: VillagerArchetype): CustomerOrder {
    const modes = ['addition', 'multi_small', 'change_simple'] as const;
    const mode = modes[Math.floor(Math.random() * modes.length)];

    if (mode === 'addition') {
      // 2 different items, small numbers
      const item1 = SHOP_ITEMS.bread; // 2 coins
      const item2 = Math.random() > 0.5 ? SHOP_ITEMS.red_apple : SHOP_ITEMS.carrot; // 2 or 1 coin
      const total = item1.basePrice + item2.basePrice;

      return {
        id: 'ord_' + Math.random().toString(36).substr(2, 9),
        customer,
        problemType: 'addition',
        storyDialogue: `Hello there! I would like one ${item1.name} (${item1.basePrice} coins) and one ${item2.name} (${item2.basePrice} coins).`,
        instructionText: `Count the coins needed to buy both items.`,
        items: [
          { item: item1, count: 1 },
          { item: item2, count: 1 }
        ],
        targetValue: total,
        hintSteps: [
          `First item: ${item1.name} costs ${item1.basePrice} coins.`,
          `Second item: ${item2.name} costs ${item2.basePrice} coins.`,
          `Add them together: ${item1.basePrice} + ${item2.basePrice} = ${total} coins.`
        ],
        explanation: `${item1.basePrice} + ${item2.basePrice} = ${total} coins! Great addition!`,
        rewardCoins: total,
        reputationGain: 10
      };
    } else if (mode === 'multi_small') {
      // 2 to 4 of the same cheap item
      const item = [SHOP_ITEMS.red_apple, SHOP_ITEMS.carrot, SHOP_ITEMS.bread][Math.floor(Math.random() * 3)];
      const count = 2 + Math.floor(Math.random() * 3); // 2, 3, or 4
      const total = item.basePrice * count;

      return {
        id: 'ord_' + Math.random().toString(36).substr(2, 9),
        customer,
        problemType: 'count',
        storyDialogue: `My hungry family needs ${count} ${item.name}s! Each one costs ${item.basePrice} coins.`,
        instructionText: `How many coins for all ${count} ${item.name}s?`,
        items: [{ item, count }],
        targetValue: total,
        hintSteps: [
          `Each ${item.name} is ${item.basePrice} coins.`,
          `Count by ${item.basePrice}s for ${count} times: ${Array.from({ length: count }, (_, i) => (i + 1) * item.basePrice).join(', ')}.`,
          `The total is ${count} × ${item.basePrice} = ${total} coins.`
        ],
        explanation: `${count} × ${item.basePrice} = ${total} coins. Spot on!`,
        rewardCoins: total,
        reputationGain: 10
      };
    } else {
      // Simple Change: customer hands over 5 or 10 coin, item costs 2, 3, or 4
      const paid = Math.random() > 0.5 ? 10 : 5;
      const cost = paid === 10 ? (5 + Math.floor(Math.random() * 4)) : (1 + Math.floor(Math.random() * 3));
      const change = paid - cost;
      const item = SHOP_ITEMS.honey_bun;

      return {
        id: 'ord_' + Math.random().toString(36).substr(2, 9),
        customer,
        problemType: 'subtraction',
        storyDialogue: `I have a shiny ${paid}-coin piece! The item costs ${cost} coins.`,
        instructionText: `How much change should you hand back?`,
        items: [{ item, count: 1 }],
        coinPaid: paid,
        targetValue: change,
        hintSteps: [
          `The customer paid ${paid} coins.`,
          `The price is ${cost} coins.`,
          `Subtract cost from money given: ${paid} - ${cost} = ${change} coins.`
        ],
        explanation: `${paid} - ${cost} = ${change} coins in change! Perfect merchant math!`,
        rewardCoins: cost,
        reputationGain: 12
      };
    }
  }

  /**
   * JOURNEYMAN (Ages 8–10): Multiplication bundles, Division, Change under 50
   */
  private static generateJourneymanOrder(customer: VillagerArchetype): CustomerOrder {
    const modes = ['multiplication', 'division', 'change_medium', 'multi_item'] as const;
    const mode = modes[Math.floor(Math.random() * modes.length)];

    if (mode === 'multiplication') {
      const itemPool = [SHOP_ITEMS.arrows, SHOP_ITEMS.berry_tart, SHOP_ITEMS.milk_jug, SHOP_ITEMS.health_salve];
      const item = itemPool[Math.floor(Math.random() * itemPool.length)];
      const qty = 3 + Math.floor(Math.random() * 5); // 3 to 7
      const total = item.basePrice * qty;

      return {
        id: 'ord_' + Math.random().toString(36).substr(2, 9),
        customer,
        problemType: 'multiplication',
        storyDialogue: `Our caravan requires ${qty} ${item.name}s. At ${item.basePrice} coins each, what is the bill?`,
        instructionText: `Calculate the total cost: ${qty} × ${item.basePrice} coins.`,
        items: [{ item, count: qty }],
        targetValue: total,
        hintSteps: [
          `Quantity requested: ${qty}`,
          `Price per item: ${item.basePrice} coins`,
          `Multiply: ${qty} × ${item.basePrice} = ${total} coins.`
        ],
        explanation: `${qty} × ${item.basePrice} = ${total} coins! Fast calculation!`,
        rewardCoins: total,
        reputationGain: 15
      };
    } else if (mode === 'division') {
      // Division: split total equally
      const divisors = [3, 4, 5, 6];
      const divisor = divisors[Math.floor(Math.random() * divisors.length)];
      const unit = 2 + Math.floor(Math.random() * 5);
      const totalItems = divisor * unit;

      return {
        id: 'ord_' + Math.random().toString(36).substr(2, 9),
        customer,
        problemType: 'division',
        storyDialogue: `I brought ${totalItems} apples to share equally among ${divisor} scouts.`,
        instructionText: `How many apples does each scout receive? (${totalItems} ÷ ${divisor})`,
        items: [{ item: SHOP_ITEMS.red_apple, count: totalItems }],
        targetValue: unit,
        hintSteps: [
          `Total apples: ${totalItems}`,
          `Number of scouts sharing: ${divisor}`,
          `Divide: ${totalItems} ÷ ${divisor} = ${unit} apples each.`
        ],
        explanation: `${totalItems} ÷ ${divisor} = ${unit} apples each! Fairly distributed!`,
        rewardCoins: 12,
        reputationGain: 15
      };
    } else if (mode === 'change_medium') {
      const paid = [20, 25, 50][Math.floor(Math.random() * 3)];
      const cost = paid - (4 + Math.floor(Math.random() * 12));
      const change = paid - cost;

      return {
        id: 'ord_' + Math.random().toString(36).substr(2, 9),
        customer,
        problemType: 'subtraction',
        storyDialogue: `My total supplies cost ${cost} coins. Here is a pouch of ${paid} coins!`,
        instructionText: `Calculate the change due to the customer: ${paid} - ${cost}`,
        items: [{ item: SHOP_ITEMS.dagger, count: 1 }],
        coinPaid: paid,
        targetValue: change,
        hintSteps: [
          `Customer handed over: ${paid} coins.`,
          `Order total cost: ${cost} coins.`,
          `Calculate difference: ${paid} - ${cost} = ${change} coins.`
        ],
        explanation: `${paid} - ${cost} = ${change} coins returned! Accurate to the coin!`,
        rewardCoins: cost,
        reputationGain: 16
      };
    } else {
      // Multi-item bundle: 2 items with quantities
      const item1 = SHOP_ITEMS.honey_bun; // 3
      const item2 = SHOP_ITEMS.milk_jug;   // 4
      const qty1 = 2;
      const qty2 = 3;
      const total = (item1.basePrice * qty1) + (item2.basePrice * qty2);

      return {
        id: 'ord_' + Math.random().toString(36).substr(2, 9),
        customer,
        problemType: 'addition',
        storyDialogue: `I need breakfast for the guardhouse: ${qty1} Honey Buns (${item1.basePrice} ea) and ${qty2} Milk Jugs (${item2.basePrice} ea).`,
        instructionText: `Calculate the grand total for both bundles.`,
        items: [
          { item: item1, count: qty1 },
          { item: item2, count: qty2 }
        ],
        targetValue: total,
        hintSteps: [
          `${qty1} Honey Buns: ${qty1} × ${item1.basePrice} = ${qty1 * item1.basePrice} coins.`,
          `${qty2} Milk Jugs: ${qty2} × ${item2.basePrice} = ${qty2 * item2.basePrice} coins.`,
          `Sum them: ${qty1 * item1.basePrice} + ${qty2 * item2.basePrice} = ${total} coins.`
        ],
        explanation: `${qty1 * item1.basePrice} + ${qty2 * item2.basePrice} = ${total} coins! Excellent ledger bookkeeping!`,
        rewardCoins: total,
        reputationGain: 18
      };
    }
  }

  /**
   * MASTER MERCHANT (Ages 10–13+): Fractions, Percentages, Ratios
   */
  private static generateMasterOrder(customer: VillagerArchetype): CustomerOrder {
    const modes = ['fraction_flask', 'discount_percent', 'ratio_craft'] as const;
    const mode = modes[Math.floor(Math.random() * modes.length)];

    if (mode === 'fraction_flask') {
      // Fractions of quantities: e.g. 3/4 of 16, 2/3 of 15, 1/2 of 18, 3/5 of 20
      const fractionPresets = [
        { num: 3, den: 4, totalVolume: 16, ans: 12 },
        { num: 2, den: 3, totalVolume: 15, ans: 10 },
        { num: 3, den: 5, totalVolume: 20, ans: 12 },
        { num: 1, den: 2, totalVolume: 18, ans: 9 },
        { num: 5, den: 6, totalVolume: 24, ans: 20 },
        { num: 2, den: 4, totalVolume: 12, ans: 6 }
      ];
      const preset = fractionPresets[Math.floor(Math.random() * fractionPresets.length)];

      return {
        id: 'ord_' + Math.random().toString(36).substr(2, 9),
        customer,
        problemType: 'fraction',
        storyDialogue: `My secret recipe requires exactly ${preset.num}/${preset.den} of a full ${preset.totalVolume}-ounce Star Elixir vial!`,
        instructionText: `What is ${preset.num}/${preset.den} of ${preset.totalVolume}? Count the ounces to pour.`,
        items: [{ item: SHOP_ITEMS.star_elixir, count: 1 }],
        targetValue: preset.ans,
        fractionValue: { numerator: preset.num, denominator: preset.den },
        hintSteps: [
          `Step 1: Find 1/${preset.den} of ${preset.totalVolume} by dividing: ${preset.totalVolume} ÷ ${preset.den} = ${preset.totalVolume / preset.den}.`,
          `Step 2: Multiply by numerator ${preset.num}: ${preset.num} × ${preset.totalVolume / preset.den} = ${preset.ans}.`
        ],
        explanation: `(${preset.totalVolume} ÷ ${preset.den}) × ${preset.num} = ${preset.ans} ounces! Masterful potion alchemy!`,
        rewardCoins: 25,
        reputationGain: 22
      };
    } else if (mode === 'discount_percent') {
      // Percentage discounts: 10%, 20%, 25%, 50% off
      const discounts = [
        { base: 20, pct: 10, discount: 2, finalPrice: 18 },
        { base: 20, pct: 25, discount: 5, finalPrice: 15 },
        { base: 40, pct: 10, discount: 4, finalPrice: 36 },
        { base: 30, pct: 20, discount: 6, finalPrice: 24 },
        { base: 50, pct: 20, discount: 10, finalPrice: 40 }
      ];
      const d = discounts[Math.floor(Math.random() * discounts.length)];

      return {
        id: 'ord_' + Math.random().toString(36).substr(2, 9),
        customer,
        problemType: 'discount',
        storyDialogue: `The festival herald announced a ${d.pct}% discount on this ${d.base}-coin shield! What is the final discounted price?`,
        instructionText: `Calculate the final price after a ${d.pct}% discount on ${d.base} coins.`,
        items: [{ item: SHOP_ITEMS.shield, count: 1 }],
        targetValue: d.finalPrice,
        hintSteps: [
          `Step 1: Calculate ${d.pct}% of ${d.base} coins = ${d.discount} coins discount.`,
          `Step 2: Subtract discount from base price: ${d.base} - ${d.discount} = ${d.finalPrice} coins.`
        ],
        explanation: `${d.base} - ${d.discount} = ${d.finalPrice} coins! You solved the festival markdown!`,
        rewardCoins: d.finalPrice,
        reputationGain: 25
      };
    } else {
      // Ratio problem:
      // "For every 2 units of Glow Shroom, add 3 units of Salve. If I buy 6 units of Glow Shroom, how many units of Salve are needed?"
      const ratioA = 2;
      const ratioB = 3;
      const multiplier = 2 + Math.floor(Math.random() * 3); // 2, 3, or 4
      const givenA = ratioA * multiplier;
      const targetB = ratioB * multiplier;

      return {
        id: 'ord_' + Math.random().toString(36).substr(2, 9),
        customer,
        problemType: 'multiplication',
        storyDialogue: `The elixir ratio is ${ratioA} Glow Shrooms for every ${ratioB} Healing Salves. If I mix in ${givenA} Glow Shrooms, how many Healing Salves do I need?`,
        instructionText: `Solve the proportion: ${ratioA} : ${ratioB} = ${givenA} : ?`,
        items: [
          { item: SHOP_ITEMS.glow_shroom, count: givenA },
          { item: SHOP_ITEMS.health_salve, count: targetB }
        ],
        targetValue: targetB,
        hintSteps: [
          `Step 1: Find how many times larger the batch is: ${givenA} ÷ ${ratioA} = ${multiplier}×`,
          `Step 2: Multiply the second ingredient: ${ratioB} × ${multiplier} = ${targetB}.`
        ],
        explanation: `${ratioA}:${ratioB} scales by ${multiplier}× to ${givenA}:${targetB}! Flawless ratio mastery!`,
        rewardCoins: 28,
        reputationGain: 25
      };
    }
  }
}
