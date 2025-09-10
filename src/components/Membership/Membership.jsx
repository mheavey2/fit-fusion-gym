import styles from "./Membership.module.css";

const Membership = () => {
  return (
    <div className={styles.membershipContainer}>
      <div className={styles.introOfferOuter}>
        <h3>Introductory Offer</h3>
        <p>€199</p>
        <ul>
          <li>Unlimited access to facilities </li>
          <li>15 Class Pass per month</li>
          <li>10% off renewal</li>
        </ul>
      </div>

      <div className={styles.membershipOuter}>
        <div className={styles.membershipItem} id={styles.membershipOne}>
          <h3>Tier 1</h3>
          <p>€249</p>
          <ul>
            <li>Unlimited access to facilities </li>
            <li>Unlimited Class Pass</li>
          </ul>
        </div>
        <div className={styles.membershipItem} id={styles.membershipTwo}>
          <h3>Tier 2</h3>
          <p>€175</p>
          <ul>
            <li>Unlimited access to facilities </li>
            <li>10 Class Pass per month</li>
          </ul>
        </div>
        <div className={styles.membershipItem} id={styles.membershipThree}>
          <h3>Tier 3</h3>
          <p>€99</p>
          <ul>
            <li>Unlimited access to facilities </li>
            <li>4 Class Pass per month</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Membership;
