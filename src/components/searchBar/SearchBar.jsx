import React, { useState, useEffect } from 'react';
import { ReactComponent as Search } from '../../assets/svg/search.svg';
import styles from './SearchBar.module.scss';

function SearchBar({ productsList, setProductList, placeholder }) {
  const [value, setValue] = useState('');
  // const originalProductsList = [...productsList];

  const search = (searchValue, products) => {
    if(!searchValue) {
      return products;
    }
    return products.filter((item) => (
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    ));
  }

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filtered = search(value, productsList);
      setProductList(filtered);
    }, 300);

    return () => clearTimeout(debounce);
  }, [value]);

  return (
    <div className={styles.searchBox}>
      <button type="button" className={styles.btnSearch}>
        <Search />
      </button>
      <input
        type="text"
        className={styles.inputSearch}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;