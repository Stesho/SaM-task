import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/img/logo.jpg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span>Book</span>
            <img src={logo} alt="logo" />
            <span>Shop</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
