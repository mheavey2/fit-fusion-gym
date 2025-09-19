import styles from "./Membership.module.css";

const Membership = () => {
  return (
    <div
      className={styles.membershipContainer}
      role="region"
      aria-labelledby="membership-heading"
    >
      <div
        className={styles.introOfferOuter}
        role="article"
        aria-label="Introductory Membership Offer"
      >
        <h3 id="membership-heading">Introductory Offer</h3>
        <p>€199</p>
        <ul role="list">
          <li role="listitem">Unlimited access to facilities </li>
          <li role="listitem">15 Class Pass per month</li>
          <li role="listitem">10% off renewal</li>
        </ul>
      </div>

      <div
        className={styles.membershipOuter}
        role="group"
        aria-label="Membership Tiers"
      >
        <div
          className={styles.membershipItem}
          id={styles.membershipOne}
          role="article"
          aria-labelledby="tier1-heading"
        >
          <h3 id="tier1-heading">Tier 1</h3>
          <p>€249</p>
          <ul role="list">
            <li role="listitem">Unlimited access to facilities </li>
            <li role="listitem">Unlimited Class Pass</li>
          </ul>
        </div>
        <div className={styles.membershipItem} id={styles.membershipTwo}>
          <h3>Tier 2</h3>
          <p>€175</p>
          <ul role="list">
            <li role="listitem">Unlimited access to facilities </li>
            <li role="listitem">10 Class Pass per month</li>
          </ul>
        </div>
        <div className={styles.membershipItem} id={styles.membershipThree}>
          <h3>Tier 3</h3>
          <p>€99</p>
          <ul role="list">
            <li role="listitem">Unlimited access to facilities </li>
            <li role="listitem">4 Class Pass per month</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Membership;
