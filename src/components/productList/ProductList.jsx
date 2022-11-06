import React from 'react';
import Product from '../product/Product';
import products from '../../assets/products/products.json';
import styles from './ProductList.module.scss';

function ProductList() {
  function importAll(r) {
    const images = {};
    // eslint-disable-next-line array-callback-return
    r.keys().map((item) => { images[item.replace('./', '')] = r(item) });
    return images;
  }

  const images = importAll(require.context('../../assets/img/products/', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className={styles.list}>
      {products.map((item) => (
        <Product
          key={item.id}
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