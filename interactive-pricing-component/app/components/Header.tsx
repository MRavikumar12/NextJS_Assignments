"use client"; // Add this at the top

import ToggleButton from './ToggleButton';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Interactive Pricing Component</h1>
      <ToggleButton />
    </header>
  );
};

export default Header;
