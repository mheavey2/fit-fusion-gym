import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.heroOuter} role="banner">
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
        <Link to="membership" id={styles.introButton}>
          Try Our Intro Offer
        </Link>
      </div>
    </div>
  );
};

export default Hero;
