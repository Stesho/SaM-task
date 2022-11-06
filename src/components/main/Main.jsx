import React from 'react';
import ProductList from '../productList/ProductList';
import styles from './Main.module.scss';

function Main() {
  return (
    <main className={styles.main}>
      <ProductList />
    </main>
  );
};

export default Main;