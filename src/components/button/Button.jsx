import React from "react";
import styles from "./Button.module.scss";

function Button({ children }) {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
}

export default Button;