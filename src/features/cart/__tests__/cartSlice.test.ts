import { describe, it, expect } from "vitest";
import cartReducer, {
  addItem,
  increaseQty,
  decreaseQty,
  removeItem,
} from "../cartSlice";

describe("cartSlice", () => {

  it("should add item to cart", () => {
    const initialState = { items: [] };

    const newState = cartReducer(
      initialState,
      addItem({ id: "milk", name: "Milk", price: 5, quantity: 1 })
    );

    expect(newState.items.length).toBe(1);
  });

  it("should increase quantity", () => {
    const initialState = {
      items: [{ id: "milk", name: "Milk", price: 5, quantity: 1 }],
    };

    const newState = cartReducer(initialState, increaseQty("milk"));

    expect(newState.items[0].quantity).toBe(2);
  });

  it("should decrease quantity", () => {
    const initialState = {
      items: [{ id: "milk", name: "Milk", price: 5, quantity: 2 }],
    };

    const newState = cartReducer(initialState, decreaseQty("milk"));

    expect(newState.items[0].quantity).toBe(1);
  });

  it("should remove item", () => {
    const initialState = {
      items: [{ id: "milk", name: "Milk", price: 5, quantity: 1 }],
    };

    const newState = cartReducer(initialState, removeItem("milk"));

    expect(newState.items.length).toBe(0);
  });

});