// import React, { useState } from 'react';
// import Button from '../button/Button';
// import products from "../../assets/products/products.json";
// import styles from './Filter.module.scss';

// function Filter({children}) {
//   const [isOpen, setIsOpen] = useState(false);
//   const authorsName = new Set(products.map((item) => item.author));
//   const authors = Array.from(authorsName).map((item, i) => ({id: i, author: item}));

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <div className={styles.filter}>
//       <button type='button' className={styles.filter__btn} onClick={toggleMenu}>
//         {children}
//       </button>
//       {
//         isOpen
//         ? <div className={styles.menu}>
//             <h3 className={styles.menu__title}>
//               Author
//             </h3>
//             <div className={styles.menu__list}>
//               <ul className={styles.menu__autorsList}>
//                 {
//                   authors.map((item, i) => (
//                     <li className={styles.menu__listItem} key={item.id}>
//                       <label htmlFor={`author${i}`}>
//                         <input id={`author${i}`} type="checkbox"/>
//                         <span className={styles.menu__listLabel}>
//                           {item.author}
//                         </span>
//                       </label>
//                     </li>
//                   ))
//                 }
//               </ul>
//             </div>
//             <Button>Filter</Button>
//           </div>
//         : null
//       }
//     </div>
//   );
// }

// export default Filter;

import React from 'react';
import DropMenu from '../dropMenu/DropMenu';
import Button from '../button/Button';
import products from "../../assets/products/products.json";
import styles from './Filter.module.scss';

function Filter() {
  const authorsName = new Set(products.map((item) => item.author));
  const authors = Array.from(authorsName).map((item, i) => ({id: i, author: item}));

  return (
    <div className={styles.filter}>
      <DropMenu caption='Filter' className={styles.filter__btn}>
        <div className={styles.menu}>
          <h3 className={styles.menu__title}>
            Author
          </h3>
          <div className={styles.menu__list}>
            <ul className={styles.menu__autorsList}>
              {
                authors.map((item, i) => (
                  <li className={styles.menu__listItem} key={item.id}>
                    <label htmlFor={`author${i}`}>
                      <input id={`author${i}`} type="checkbox"/>
                      <span className={styles.menu__listLabel}>
                        {item.author}
                      </span>
                    </label>
                  </li>
                ))
              }
            </ul>
          </div>
          <Button>Filter</Button>
        </div>
      </DropMenu>
    </div>
  );
}

export default Filter;