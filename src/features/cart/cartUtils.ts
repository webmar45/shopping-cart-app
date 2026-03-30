import type { CartItem } from "./cartTypes";

export const calculateTotals = (items: CartItem[]) => {
  let subtotal = 0;
  let totalSavings = 0;

  const savingsBreakdown: Record<string, number> = {};
  const offers: string[] = [];

  const soupItem = items.find((i) => i.id === "soup");

  items.forEach((item) => {
    subtotal += item.price * item.quantity;

    //  Cheese Offer
    if (item.id === "cheese") {
      const freeQty = Math.floor(item.quantity / 2);
      const saving = freeQty * item.price;

      if (saving > 0) {
        savingsBreakdown[item.id] = saving;
        totalSavings += saving;
        offers.push("Buy 1 Cheese Get 1 Free");
      }
    }

    //  Bread Offer
    if (item.id === "bread" && soupItem) {
      const discountQty = Math.min(item.quantity, soupItem.quantity);
      const saving = discountQty * (item.price / 2);

      if (saving > 0) {
        savingsBreakdown[item.id] = saving;
        totalSavings += saving;
        offers.push("Soup + Bread Half Price");
      }
    }

    //  Butter Offer
    if (item.id === "butter") {
      const saving = item.quantity * (item.price / 3);

      if (saving > 0) {
        savingsBreakdown[item.id] = saving;
        totalSavings += saving;
        offers.push("Butter 1/3 Off");
      }
    }
  });

  return {
    subtotal,
    savings: totalSavings,
    total: subtotal - totalSavings,
    savingsBreakdown,
    offers,
  };
};