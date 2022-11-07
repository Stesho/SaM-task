import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
import Button from '../button/Button';
import styles from './Cart.module.scss';

function Cart() {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalSum = cart.reduce((sum, current) => sum + current.price * current.count, 0);
    setTotal(totalSum);
  }, [cart]);

  return (
    <div className={styles.cart}>
      <h2 className={styles.cart__title}>
        Cart
      </h2>
      <div className={styles.cart__list}>
        {cart.map((item) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.item__description}>
              <div className={styles.item__name}>
                {item.name}
              </div>
              <div className={styles.item__price}>
                ${item.price} x {item.count}
              </div>
            </div>
            <div className={styles.item__delete}>
              X
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cart__checkout}>
        <div className={styles.cart__total}>
          <span className={styles.cart__totalCaption}>Total:</span>
          <span className={styles.cart__totalSum}>${total}</span>
        </div>
        <Button>checkout</Button>
      </div>
    </div>
  );
}

export default Cart;