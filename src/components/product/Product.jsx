import React from "react";
import Button from "../button/Button";
import styles from "./Product.module.scss";
// import image from "../../assets/img/products/1984.jpg";

function Product({img, name, author, price}) {
  return (
    <div className={styles.product}>
      <div className={styles.product__img}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.product__name}>{name}</div>
      <div className={styles.product__author}>{author}</div>
      <div className={styles.product__buyWrapper}>
        <div className={styles.product__price}>{price}$</div>
        <Button>buy</Button>
      </div>
    </div>
  );
}

export default Product;
