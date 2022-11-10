import React, { useContext, useEffect, useState } from "react";
import CartItem from "../cartItem/CartItem";
import Modal from "../modal/Modal";
import CartContext from "../../context/CartContext";
import Button from "../button/Button";
import styles from "./Cart.module.scss";

function Cart() {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [isActiveModal, setIsActiveModal] = useState(false);

  useEffect(() => {
    const totalSum = cart.reduce(
      (sum, current) => sum + current.price * current.count,
      0
    );
    setTotal(totalSum);
  }, [cart]);

  return (
    <div className={styles.cart}>
      <h2 className={styles.cart__title}>Cart</h2>
      <div className={styles.cart__list}>
        {
        cart.length > 0
        ? cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              count={item.count}
            />
          ))
        : <div className={styles.cart__emptyList}>
            Сart is empty
          </div>
        }
      </div>
      <div className={styles.cart__checkout}>
        <div className={styles.cart__total}>
          <span className={styles.cart__totalCaption}>Total: </span>
          <span className={styles.cart__totalSum}>${total}</span>
        </div>
        <Button
          className={styles.cart__btn}
          onClick={() => setIsActiveModal(true)}
        >
          Checkout
        </Button>
      </div>
      <Modal
        isActive={isActiveModal}
        setIsActive={setIsActiveModal}
      >
        <div className={styles.modal}>
          Thank you for the purchase!
        </div>
      </Modal>
    </div>
  );
}

export default Cart;
