import React from 'react';
import Product from '../product/Product';
import products from '../../assets/products/products.json';
import images from '../../services/images';
import styles from './ProductList.module.scss';

function ProductList() {
  return (
    <div className={styles.list}>
      {products.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          img={images[item.img]}
          name={item.name}
          author={item.author}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ProductList;