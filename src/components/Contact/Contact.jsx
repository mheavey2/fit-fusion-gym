import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div
      className={`${styles.contactOuter}, contactContainer`}
      role="contactinfo"
      data-testid="contact-outer"
    >
      <div
        className={`${styles.infoContainer}, infoContainer`}
        role="group"
        aria-label="location"
        data-testid="info-container"
      >
        <h3>Location</h3>
        <p>Unit 1</p>
        <p>Business Park</p>
        <p>Limerick</p>
      </div>
      <div
        className={`${styles.phoneContainer}, phoneContainer`}
        role="group"
        aria-label="Contact Information"
        data-testid="phone-container"
      >
        <h3>Phone</h3>
        <p>061-1234567</p>
      </div>

      <div
        className={`${styles.hoursContainer}, hoursContainer`}
        role="group"
        aria-label="Business Hours"
        data-testid="hours-container"
      >
        <h3>Opening Hours</h3>
        <p>Mon-Sat: 06:00-22:00</p>

        <p>Sun: 08:00-20:00</p>
      </div>
    </div>
  );
};

export default Contact;
