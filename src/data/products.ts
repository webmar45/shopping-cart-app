export interface Product {
  id: string;
  name: string;
  price: number;
  offer?: string;
}

export const products: Product[] = [
  { id: "bread", name: "Bread", price: 1.1, offer: "Buy Soup → Bread 50% Off" },
  { id: "milk", name: "Milk", price: 0.5 },
  { id: "cheese", name: "Cheese", price: 0.9, offer: "Buy 1 Get 1 Free" },
  { id: "soup", name: "Soup", price: 0.6 },
  { id: "butter", name: "Butter", price: 1.2, offer: "1/3 Off" },
];