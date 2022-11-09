import React, { useState, useMemo } from "react";
import CartContext from "./context/CartContext";
import ProductsContext from "./context/ProductsContext";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import productsData from './assets/products/products.json';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(productsData);

  const cartValue = useMemo(() => ({ cart, setCart }), [cart]);
  const productsValue = useMemo(() => ({ products, setProducts }), [products]);

  return (
    <ProductsContext.Provider value={productsValue}>
    <CartContext.Provider value={cartValue}>
      <div className="app">
        <Header />
        <Main />
      </div>
    </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
