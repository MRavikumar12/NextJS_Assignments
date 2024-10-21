import Slider from './Slider';
import styles from './PricingComponent.module.css';

const PricingComponent = () => {
  return (
    <div className={styles.pricingCard}>
      <h2 className={styles.heading}>Interactive Pricing</h2>
      <Slider />
      <p className={styles.ctaText}>Sign up for a year and save 25%</p>
    </div>
  );
};

export default PricingComponent;
