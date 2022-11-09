import React, { useContext, useState } from "react";
import ProductsContext from "../../context/ProductsContext";
import Product from "../product/Product";
import Filter from "../filter/Filter";
import images from "../../services/images";
import styles from "./ProductList.module.scss";

function ProductList() {
  const { products } = useContext(ProductsContext);
  const [productsList, setProductList] = useState(products);

  return (
    <div className={styles.productList}>
      <div className={styles.bar}>
        <Filter products={products} setProducts={setProductList}/>
      </div>
      <div className={styles.list}>
        {
        productsList.length > 0
        ? productsList.map((item) => (
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
