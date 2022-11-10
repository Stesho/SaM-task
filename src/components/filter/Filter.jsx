import React, { useState } from "react";
import DropMenu from '../dropMenu/DropMenu';
import Button from '../button/Button';
import styles from './Filter.module.scss';

function Filter({ products, setProducts, className, children }) {
  const authorsName = new Set(products.map((item) => item.author));
  const authors = Array.from(authorsName).map((item, i) => ({id: i, author: item}));
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const checkboxes = authors.map(() => false);
  const [isChecked, setIsChecked] = useState(checkboxes);
  const [filterParams, setFilterParams] = useState({
    authors: [],
  });

  const setMinPrice = (price) => {
    const newPrice = Number(price);
    setMin(newPrice);
    if(newPrice < 0) {
      setMin(0);
    }
    else if(newPrice > max) {
      setMin(max);
    }
  }

  const setMaxPrice = (price) => {
    const newPrice = Number(price);
    setMax(newPrice);
    if(newPrice > 100) {
      setMax(100);
    }
    else if(newPrice < min) {
      setMax(min);
    }
  }

  const toggleAuthor = (author) => {
    if (Array.isArray(filterParams.authors)) {
      let newArr;
      if (filterParams.authors.indexOf(author) === -1) {
        newArr = [...filterParams.authors, author];
      }
      else {
        newArr = filterParams.authors.slice();
        newArr.splice(newArr.indexOf(author), 1);
      }
      setFilterParams((currentParam) => ({...currentParam, authors: newArr}));
    }
    else {
      setFilterParams((currentParam) => ({...currentParam, authors: author}));
    }
  }
  
  const filter = () => {
    const filtered = products.filter((product) => {
      let condition = true;
      if (filterParams.authors.length > 0) {
        condition = filterParams.authors.find((author) => author === product.author);
      }
      return (
        condition &&
        product.price >= min &&
        product.price <= max
      )
    });
    
    setProducts([...filtered]);
  }

  return (
    <div className={styles.filter}>
      <DropMenu caption={children} className={className}>
        <div className={styles.menu}>
          <h3 className={styles.menu__title}>
            Price
          </h3>
          <div className={[styles.menu__section, styles.price].join(' ')}>
            <div className={styles.min}>
              <span>min:</span>
              <input
                type="number"
                value={min}
                onChange={(event) => setMin(event.target.value)}
                onBlur={(event) => setMinPrice(event.target.value)}
              />
              <span>$</span>
            </div>
            <div className={styles.max}>
              <span>max:</span>
              <input
                type="number"
                value={max}
                onChange={(event) => setMax(event.target.value)}
                onBlur={(event) => setMaxPrice(event.target.value)}
              />
              <span>$</span>
            </div>
          </div>
          <h3 className={styles.menu__title}>
            Author
          </h3>
          <div className={styles.menu__section}>
            <ul>
              {
                authors.map((item, i) => (
                  <li className={styles.author} key={item.id}>
                    <label htmlFor={`author${i}`}>
                      <input
                        id={`author${i}`}
                        type="checkbox"
                        value={item.author}
                        checked={isChecked[i]}
                        onChange={(event) => {
                          const newCheckboxes = [...isChecked];
                          newCheckboxes[i] = !newCheckboxes[i];
                          toggleAuthor(event.target.value);
                          setIsChecked(newCheckboxes);
                        }}
                      />
                      <span className={styles.authorName}>
                        {item.author}
                      </span>
                    </label>
                  </li>
                ))
              }
            </ul>
          </div>
          <Button onClick={filter}>Filter</Button>
        </div>
      </DropMenu>
    </div>
  );
}

export default Filter;