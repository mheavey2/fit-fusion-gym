import styles from "./Team.module.css";
const Team = () => {
  const teamMembers = [
    {
      id: "team1",
      name: "Ava",
      title: "Co-Founder | Coach | PT",
      image: "weights-woman.svg",
      alt: "woman doing a plank with dumbells",
    },
    {
      id: "team2",
      name: "Joe",
      title: "Co-Founder | Coach",
      image: "dumbbell-man.svg",
      alt: "seated man with a dumbbell",
    },
    {
      id: "team3",
      name: "Ana",
      title: "Head of Operations | Coach",
      image: "yoga-ball-woman.svg",
      alt: "woman seated on floor with elbow resting on exercise ball",
    },
    {
      id: "team4",
      name: "Zac",
      title: "Coach | PT",
      image: "plank-man.svg",
      alt: "man doing a plank",
    },
    {
      id: "team5",
      name: "Hillary",
      title: "Nutritionist | Coach",
      image: "weight-squat-woman.svg",
      alt: "woman doing a squat with a weighted bar",
    },
    {
      id: "team6",
      name: "Pat",
      title: "Coach | PT",
      image: "weight-bar-man.svg",
      alt: "man standing with his hands on a racked weighted bar",
    },
  ];

  return (
    <div className={styles.teamContainer} role="region" aria-label="The Team">
      {teamMembers.map((member) => (
        <div
          className={styles.teamMember}
          key={member.id}
          role="listitem"
          aria-label={`Team Member ${member.name}`}
        >
          <img
            src={member.image}
            alt={member.alt}
            className={styles.teamImg}
            role="img"
            aria-label={`${member.name} profile image`}
          />
          <h2>{member.name}</h2>
          <h3 role="text" aria-label="Team member role">
            {member.title}
          </h3>
        </div>
      ))}
    </div>
  );
};
export default Team;
