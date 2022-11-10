import React, { useState, useRef, useEffect } from "react";
import styles from "./DropMenu.module.scss";

function DropMenu({ caption, className, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const menu = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onClick = (event) =>
      menu.current.contains(event.target) || setIsOpen(false);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div ref={menu} className={styles.dropMenu}>
      <button type="button" className={className} onClick={toggleMenu}>
        {caption}
      </button>
      {isOpen ? children : null}
    </div>
  );
}

export default DropMenu;
