import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';
import styles from './CartItem.module.scss';

function CartItem({id, name, price, count}) {
  const {cart, setCart} = useContext(CartContext);

  const deleteItem = () => {
    const product = cart.find((item) => item.id === id);
    const index = cart.indexOf(product);
    cart.splice(index, 1);
    setCart([...cart]);
  }

  return (
    <div className={styles.item}>
      <div className={styles.item__description}>
        <div className={styles.item__name}>
          {name}
        </div>
        <div className={styles.item__price}>
          ${price} x {count}
        </div>
      </div>
      <button type='button' onClick={deleteItem} className={styles.item__delete}>
        X
      </button>
    </div>
  );
}

export default CartItem;