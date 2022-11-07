import React, { useContext, useEffect, useState } from 'react';
import CartItem from '../cartItem/CartItem';
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
          <CartItem key={item.id} id={item.id} name={item.name} price={item.price} count={item.count}/>
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