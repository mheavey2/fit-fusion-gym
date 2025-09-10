import styles from "./Team.module.css";
const Team = () => {
  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamMember} id={styles.teamOne}>
        <img
          className={styles.teamImg}
          src="weights-woman.svg"
          alt="woman doing a squat with a weighted bar"
        />
        <h2>Ava</h2>
        <h3>Co-Founder | Coach | PT</h3>
      </div>
      <div className={styles.teamMember} id={styles.teamTwo}>
        <img
          className={styles.teamImg}
          src="kickbox-man.svg"
          alt="woman doing a squat with a weighted bar"
        />
        <h2>Joe</h2>
        <h3>Co-Founder | Coach</h3>
      </div>
      <div className={styles.teamMember} id={styles.teamThree}>
        <img
          className={styles.teamImg}
          src="yoga-ball-woman.svg"
          alt="woman doing a squat with a weighted bar"
        />
        <h2>Ana</h2>
        <h3>Head of Operations | Coach</h3>
      </div>
      <div className={styles.teamMember} id={styles.teamFour}>
        <img
          className={styles.teamImg}
          src="treadmill-man.svg"
          alt="woman doing a squat with a weighted bar"
        />
        <h2>Zac</h2>
        <h3>Coach | PT </h3>
      </div>

      <div className={styles.teamMember} id={styles.teamFive}>
        <img
          className={styles.teamImg}
          src="yoga-woman.svg"
          alt="woman doing a squat with a weighted bar"
        />
        <h2>Hillary</h2>
        <h3>Nutritionist | Coach</h3>
      </div>
      <div className={styles.teamMember} id={styles.teamSix}>
        <img
          className={styles.teamImg}
          src="weights-man.svg"
          alt="woman doing a squat with a weighted bar"
        />
        <h2>Pat</h2>
        <h3> Coach | PT</h3>
      </div>
    </div>
  );
};
export default Team;
