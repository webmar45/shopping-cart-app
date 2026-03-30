import { useAppSelector } from "../hooks/reduxHooks";
import { calculateTotals } from "../features/cart/cartUtils";
import CartItem from "./CartItem";

export default function Basket() {
  const items = useAppSelector((state) => state.cart.items);

  const { subtotal, savings, total, savingsBreakdown, offers } =
    calculateTotals(items);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl transition-all hover:scale-105">
      <h2 className="text-2xl font-bold mb-4">🧾 Basket</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">No items added</p>
      ) : (
        items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            saving={savingsBreakdown[item.id]}
          />
        ))
      )}

      <hr className="my-4" />

      {/* 🏷 Offers Section */}
      {offers.length > 0 && (
        <div className="mb-3 bg-green-50 p-3 rounded-lg">
          <p className="font-semibold text-green-700">Offers Applied:</p>
          {offers.map((offer, index) => (
            <p key={index} className="text-green-600 text-sm">
              ✔ {offer}
            </p>
          ))}
        </div>
      )}

      {/* 💰 BILL */}
      <div className="space-y-2 text-sm">
        <p className="flex justify-between">
          <span>Subtotal</span>
          <span>£{subtotal.toFixed(2)}</span>
        </p>

        <p className="flex justify-between text-red-500">
          <span>Savings</span>
          <span>-£{savings.toFixed(2)}</span>
        </p>

        <p className="flex justify-between font-bold text-lg mt-2">
          <span>Total</span>
          <span>£{total.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}