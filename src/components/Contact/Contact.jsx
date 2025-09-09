import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactOuter}>
      <div className={styles.infoContainer}>
        <h3>Location</h3>
        <p>Unit 1</p>
        <p>Business Park</p>
        <p>Limerick</p>
      </div>
      <div className={styles.phoneContainer}>
        <h3>Phone</h3>
        <p>061-1234567</p>
      </div>

      <div className={styles.hoursContainer}>
        <h3>Opening Hours</h3>
        <p>Mon-Sat: 06:00-22:00</p>

        <p>Sun: 08:00-20:00</p>
      </div>
    </div>
  );
};

export default Contact;
