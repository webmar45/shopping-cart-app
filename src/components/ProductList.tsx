import { products } from "../data/products";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addItem } from "../features/cart/cartSlice";

export default function ProductList() {
  const dispatch = useAppDispatch();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900">Products</h2>
        <p className="text-sm text-slate-500">Select items to add to your basket.</p>
      </div>

      {products.map((p) => (
        <div
          key={p.id}
          className="mb-3 flex items-center justify-between rounded-lg border border-slate-200 p-3 transition hover:border-slate-300"
        >
          <div>
            <p className="font-medium text-slate-900">{p.name}</p>
            <p className="text-sm text-slate-500">₹ {p.price.toFixed(2)}</p>

            {p.offer && (
              <span className="mt-1 inline-block rounded-md bg-emerald-50 px-2 py-1 text-xs text-emerald-700">
                {p.offer}
              </span>
            )}
          </div>

          <button
            onClick={() =>
              dispatch(addItem({ ...p, quantity: 1 }))
            }
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Add item
          </button>
        </div>
      ))}
    </div>
  );
}