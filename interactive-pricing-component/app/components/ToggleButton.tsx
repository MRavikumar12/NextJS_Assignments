"use client"; // Add this at the top

import { useState, useEffect } from 'react';
import styles from './ToggleButton.module.css';

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode ? 'dark' : 'light';
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark', !darkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={toggleTheme} className={styles.toggleButton}>
      {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default ToggleButton;
