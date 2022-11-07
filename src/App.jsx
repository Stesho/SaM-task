import React, { useState, useMemo } from "react";
import CartContext from './context/CartContext';
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const [cart, setCart] = useState([]);
  const value = useMemo(() => (
    { cart, setCart }
  ), [cart]);

  return (
    <CartContext.Provider value={value}>
      <div className="app">
        <Header />
        <Main />
      </div>
    </CartContext.Provider>
  );
}

export default App;
