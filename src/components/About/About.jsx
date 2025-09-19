import styles from "./About.module.css";

const About = () => {
  return (
    <div
      className={styles.aboutContainer}
      role="region"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading">Our Ethos</h2>
      <p className={`${styles.aboutEthos} data-test-class`} role="banner">
        <span>Strength </span>of body,
        <span> Flexibility </span>of mind, <span> Endurance </span> of spirit
      </p>
      <p className={styles.aboutContent} role="article">
        At the core of FitFusion Studios is a commitment to
        <span> integrity</span>, <span> purposeful movement</span>, and
        <span> continuous achievement</span>. We believe fitness is about
        building strength and flexibility in both body and mind - so you can
        move with
        <span> strength </span>
        and <span>resilience</span> in the world and move through life with
        <span> confidence</span>.
      </p>
    </div>
  );
};

export default About;
