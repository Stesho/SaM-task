import React from "react";
import ProductList from "../productList/ProductList";
import Cart from "../cart/Cart";
import styles from "./Main.module.scss";

function Main() {
  return (
    <main className={styles.main}>
      <div className={[styles.container, styles.wrapper].join(" ")}>
        <ProductList />
        <Cart className={styles.cart}/>
      </div>
    </main>
  );
}

export default Main;
