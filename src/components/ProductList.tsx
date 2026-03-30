import { products } from "../data/products";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addItem } from "../features/cart/cartSlice";

export default function ProductList() {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl transition-all hover:scale-105">
      <h2 className="text-2xl font-bold mb-4">🛒 Products</h2>

      {products.map((p) => (
        <div
          key={p.id}
          className="flex justify-between items-center mb-4 p-3 rounded-lg hover:bg-gray-50"
        >
          {/* LEFT */}
          <div>
            <p className="font-semibold">{p.name}</p>
            <p className="text-gray-500 text-sm">
              £{p.price.toFixed(2)}
            </p>

            {/* 🏷 OFFER BADGE */}
            {p.offer && (
              <span className="inline-block mt-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                {p.offer}
              </span>
            )}
          </div>

          {/* RIGHT */}
          <button
            onClick={() =>
              dispatch(addItem({ ...p, quantity: 1 }))
            }
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1 rounded-lg hover:opacity-90 transition hover:scale-105"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}