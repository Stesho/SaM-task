// import React from "react";
import React, { useState } from "react";
import Cart from "../cart/Cart";
import useTheme from "../../hooks/useTheme";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg";

function Header() {
  const [theme, toggleTheme] = useTheme();
  const [isActiveCart, setIsActiveCart] = useState(false);

  const setActive = () => isActiveCart ? `${styles.cart__menu} ${styles.active}` : styles.cart__menu

  return (
    <header className={styles.header}>
      <div className={[styles.headerContainer, styles.container].join(" ")}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span>Book</span>
            <Logo className={styles.img} />
            <span>Shop</span>
          </div>
        </nav>
        <div className={styles.bar}>
          <div className={styles.themeSwitcher}>
            <div className={styles.themeSwitcher__caption}>Theme</div>
            <label className={styles.themeSwitcher__label} htmlFor="themeToggle">
              <input
                id="themeToggle"
                type="checkbox"
                onChange={(event) => toggleTheme(event.target.checked)}
                checked={theme === "dark"}
              />
              <div className={styles.themeSwitcher__btn} />
            </label>
          </div>
          <div className={styles.cart}>
            <button
              type="button"
              className={styles.cart__btn}
              onClick={() => setIsActiveCart(!isActiveCart)}
            >
              <CartIcon fill="#000"/>
            </button>
            <Cart className={setActive()} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
