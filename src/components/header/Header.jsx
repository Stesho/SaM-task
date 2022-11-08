import React from "react";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";


function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span>Book</span>
            <Logo className={styles.img}/>
            <span>Shop</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
