import React, { useState } from "react";
import DropMenu from '../dropMenu/DropMenu';
import Button from '../button/Button';
import styles from './Filter.module.scss';

function Filter({ products, setProducts }) {
  const authorsName = new Set(products.map((item) => item.author));
  const authors = Array.from(authorsName).map((item, i) => ({id: i, author: item}));
  const checkboxes = authors.map(() => false);
  const [isChecked, setIsChecked] = useState(checkboxes);
  const [filterParams, setFilterParams] = useState({
    authors: [],
  });

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
    if (filterParams.authors.length === 0) {
      setProducts(products);
      return;
    }
    
    const filtered = products.filter((product) => (
      filterParams.authors.find((author) => author === product.author)
    ));
    
    setProducts([...filtered]);
  }

  return (
    <div className={styles.filter}>
      <DropMenu caption='Filter' className={styles.filter__btn}>
        <div className={styles.menu}>
          <h3 className={styles.menu__title}>
            Author
          </h3>
          <div className={styles.menu__list}>
            <ul>
              {
                authors.map((item, i) => (
                  <li className={styles.menu__author} key={item.id}>
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
                      <span className={styles.menu__authorName}>
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