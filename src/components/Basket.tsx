import { useAppSelector } from "../hooks/reduxHooks";
import { calculateTotals } from "../features/cart/cartUtils";
import CartItem from "./CartItem";

export default function Basket() {
  const items = useAppSelector((state) => state.cart.items);

  const { subtotal, savings, total, savingsBreakdown, offers } =
    calculateTotals(items);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900">Basket</h2>
        <p className="text-sm text-slate-500">Review items and discounts.</p>
      </div>

      {items.length === 0 ? (
        <p className="rounded-md border border-dashed border-slate-300 p-4 text-sm text-slate-500">
          Your basket is empty.
        </p>
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

      {offers.length > 0 && (
        <div className="mb-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
          <p className="font-semibold text-emerald-700">Offers applied</p>
          {offers.map((offer, index) => (
            <p key={index} className="text-sm text-emerald-700">
              - {offer}
            </p>
          ))}
        </div>
      )}

      <div className="space-y-2 text-sm">
        <p className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span>₹ {subtotal.toFixed(2)}</span>
        </p>

        <p className="flex justify-between text-rose-600">
          <span>Savings</span>
          <span>-₹ {savings.toFixed(2)}</span>
        </p>

        <p className="mt-2 flex justify-between text-lg font-semibold text-slate-900">
          <span>Total</span>
          <span>₹ {total.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}