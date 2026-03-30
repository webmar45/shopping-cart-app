import ProductList from "./components/ProductList";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-10">
      
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        🛍 Shopping Cart
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <ProductList />
        <Basket />
      </div>
    </div>
  );
}

export default App;