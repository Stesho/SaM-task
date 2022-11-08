import React from "react";
import useTheme from "../../hooks/useTheme";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

function Header() {
  const [theme, toggleTheme] = useTheme();

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
      </div>
    </header>
  );
}

export default Header;
