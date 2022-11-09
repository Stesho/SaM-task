import React from "react";
import Product from "../product/Product";
import Filter from "../filter/Filter";
import products from "../../assets/products/products.json";
import images from "../../services/images";
import styles from "./ProductList.module.scss";

function ProductList() {
  return (
    <div className={styles.productList}>
      <div className={styles.bar}>
        <Filter className={styles.bar__filter}>Filter</Filter>
      </div>
      <div className={styles.list}>
        {
        products.length > 0
        ? products.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              img={images[item.img]}
              name={item.name}
              author={item.author}
              price={item.price}
            />
          ))
        : <div className={styles.emptyList}>
            Selected products are missing
          </div>
        }
      </div>
    </div>
  );
}

export default ProductList;
