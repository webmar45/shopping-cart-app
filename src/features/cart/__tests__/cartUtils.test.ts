import { describe, it, expect } from "vitest";
import { calculateTotals } from "../cartUtils";

describe("calculateTotals", () => {
  
  it("should calculate subtotal correctly", () => {
    const items = [
      { id: "cheese", name: "Cheese", price: 10, quantity: 2 },
    ];

    const result = calculateTotals(items);

    expect(result.subtotal).toBe(20);
  });

  it("should apply Buy 1 Get 1 Free (cheese)", () => {
    const items = [
      { id: "cheese", name: "Cheese", price: 10, quantity: 2 },
    ];

    const result = calculateTotals(items);

    expect(result.savings).toBe(10);
    expect(result.total).toBe(10);
  });

  it("should apply soup + bread discount", () => {
    const items = [
      { id: "soup", name: "Soup", price: 5, quantity: 1 },
      { id: "bread", name: "Bread", price: 4, quantity: 1 },
    ];

    const result = calculateTotals(items);

    expect(result.savings).toBe(2); // 50% of bread
  });

  it("should apply butter 1/3 discount", () => {
    const items = [
      { id: "butter", name: "Butter", price: 9, quantity: 1 },
    ];

    const result = calculateTotals(items);

    expect(result.savings).toBeCloseTo(3);
  });

  it("should handle empty cart", () => {
    const result = calculateTotals([]);

    expect(result.subtotal).toBe(0);
    expect(result.total).toBe(0);
  });

});