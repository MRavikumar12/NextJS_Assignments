"use client"; // Make sure this is at the top of the file

import { useState } from 'react';
import styles from './Slider.module.css';

const Slider = () => {
  const [value, setValue] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value, 10));
  };

  return (
    <div className={styles.sliderContainer}>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleSliderChange}
        className={styles.slider}
      />
      <p className={styles.priceText}>Price: ${value}</p>
    </div>
  );
};

export default Slider;
