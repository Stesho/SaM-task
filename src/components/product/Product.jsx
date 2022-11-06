import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import Button from "../button/Button";
import styles from "./Product.module.scss";

function Product({id, img, name, author, price}) {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    setCart([{
      id,
      name,
      price,
    }, ...cart]);
  }

  return (
    <div className={styles.product}>
      <div className={styles.product__img}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.product__name}>{name}</div>
      <div className={styles.product__author}>{author}</div>
      <div className={styles.product__buyWrapper}>
        <div className={styles.product__price}>{price}$</div>
        <Button onClick={addToCart}>buy</Button>
      </div>
    </div>
  );
}

export default Product;
