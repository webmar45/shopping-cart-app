import { useAppDispatch } from "../hooks/reduxHooks";
import {
  increaseQty,
  decreaseQty,
  removeItem,
} from "../features/cart/cartSlice";
import type { CartItem as ItemType } from "../features/cart/cartTypes";

export default function CartItem({
  item,
  saving,
}: {
  item: ItemType;
  saving?: number;
}) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between border-b border-slate-200 py-3">
      <div>
        <p className="font-medium text-slate-900">{item.name}</p>
        <p className="text-sm text-slate-500">₹ {item.price.toFixed(2)}</p>
        {saving ? (
          <p className="text-xs text-emerald-700">You save ₹ {saving.toFixed(2)}</p>
        ) : null}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(decreaseQty(item.id))}
          className="h-8 w-8 rounded border border-slate-300 text-slate-700 hover:bg-slate-100"
          aria-label={`Decrease ${item.name}`}
        >
          -
        </button>

        <span className="min-w-4 text-center text-sm font-medium text-slate-900">
          {item.quantity}
        </span>

        <button
          onClick={() => dispatch(increaseQty(item.id))}
          className="h-8 w-8 rounded border border-slate-300 text-slate-700 hover:bg-slate-100"
          aria-label={`Increase ${item.name}`}
        >
          +
        </button>
      </div>

      <div className="flex items-center gap-3">
        <span className="font-semibold text-slate-900">
          GBP {(item.price * item.quantity).toFixed(2)}
        </span>
        <button
          onClick={() => dispatch(removeItem(item.id))}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-700 transition hover:bg-rose-200"
          title="Remove"
          aria-label={`Remove ${item.name}`}
        >
          x
        </button>
      </div>
    </div>
  );
}