import React from "react";
import Button from "../button/Button";
import styles from "./Product.module.scss";
import image from "../../assets/img/products/1984.jpg";

function Product() {
  return (
    <div className={styles.product}>
      <div className={styles.product__img}>
        <img src={image} alt="" />
      </div>
      <div className={styles.product__name}>1984</div>
      <div className={styles.product__author}>George Orwell</div>
      <div className={styles.product__buyWrapper}>
        <div className={styles.product__price}>50$</div>
        <Button>buy</Button>
      </div>
    </div>
  );
}

export default Product;
