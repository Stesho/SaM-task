import React from 'react';
import DropMenu from '../dropMenu/DropMenu';
import styles from './Sort.module.scss';

function Sort({ setValue, className, children}) {
  const sort = (compareFunction) => {
    setValue((currentValue) => [...currentValue.sort(compareFunction)]);
  }

  const options = [
    { 
      id: 1,
      value: 'Alphabetically, a-z',
      sortFunction: () => sort((a, b) => a.name.localeCompare(b.name))
    },
    { 
      id: 2,
      value: 'Alphabetically, z-a',
      sortFunction: () => sort((a, b) => b.name.localeCompare(a.name))
    },
    { 
      id: 3,
      value: 'Price, low to high',
      sortFunction: () => sort((a, b) => a.price - b.price)
    },
    { 
      id: 4,
      value: 'Price, high to low',
      sortFunction: () => sort((a, b) => b.price - a.price)
    },
  ];

  return (
    <div className={styles.sort}>
      <DropMenu caption={children} className={className}>
        <div className={styles.select}>
          {
            options.map((option) => (
              <button
                type='button'
                className={styles.select__option}
                onClick={() => {
                  option.sortFunction();
                }} key={option.id}
              >
                {option.value}
              </button>
            ))
          }
        </div>
      </DropMenu>
    </div>
  );
}

export default Sort;