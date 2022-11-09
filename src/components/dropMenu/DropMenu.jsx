import React, { useState } from 'react';
import styles from './DropMenu.module.scss';

function DropMenu({ caption, className, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.dropMenu}>
      <button type='button' className={className} onClick={toggleMenu}>
        {caption}
      </button>
      {
        isOpen
        ? children
        : null
      }
    </div>
  );
}

export default DropMenu;