import React from "react";
import styles from "./Button.module.scss";

function Button({ children, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[styles.button, className].join(" ")}
    >
      {children}
    </button>
  );
}

export default Button;
