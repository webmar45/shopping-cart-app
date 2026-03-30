import { useAppDispatch } from "../hooks/reduxHooks";
import {
  increaseQty,
  decreaseQty,
  removeItem,
} from "../features/cart/cartSlice";
import type { CartItem as ItemType } from "../features/cart/cartTypes";

export default function CartItem({ item }: { item: ItemType }) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center border-b py-3">

      {/* LEFT */}
      <div>
        <p className="font-semibold">{item.name}</p>
        <p className="text-gray-500 text-sm">
          £{item.price.toFixed(2)}
        </p>
      </div>

      {/* CENTER */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(decreaseQty(item.id))}
          className="bg-gray-200 px-3 rounded hover:bg-gray-300"
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => dispatch(increaseQty(item.id))}
          className="bg-gray-200 px-3 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3">

        <span className="font-semibold">
          £{(item.price * item.quantity).toFixed(2)}
        </span>

        
        <button
            onClick={() => dispatch(removeItem(item.id))}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
            title="Remove"
            >
            ✕
        </button>

        
      </div>
    </div>
  );
}