import React from 'react';
import Button from '../button/Button';
import styles from './Cart.module.scss';

function Cart() {
  return (
    <div className={styles.cart}>
      <h2 className={styles.cart__title}>
        Cart
      </h2>
      <div className={styles.cart__list}>
        <div className={styles.item}>
          <div className={styles.item__description}>
            <div className={styles.item__name}>
              Book name
            </div>
            <div className={styles.item__price}>
              50$
            </div>
          </div>
          <div className={styles.item__delete}>
            X
          </div>
        </div>
      </div>
      <div className={styles.cart__checkout}>
        <div className={styles.cart__total}>
          <span className={styles.cart__totalCaption}>Total:</span>
          <span className={styles.cart__totalSum}>$250</span>
        </div>
        <Button>checkout</Button>
      </div>
    </div>
  );
}

export default Cart;