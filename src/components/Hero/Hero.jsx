import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.heroOuter}>
      <div className={styles.heroContent}>
        <h1>FitFusion Studios</h1>
        <h2>Find Your Fit</h2>
        <h3>
          <span>Strength</span>
          <span>|</span>
          <span>Flexibility</span>
          <span>|</span>
          <span>Endurance</span>
        </h3>
        <button className={styles.introButton}>Try Our Intro Offer</button>
      </div>
    </div>
  );
};
