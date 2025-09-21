import styles from "./Membership.module.css";

const membershipPerks = [
  "Unlimited access to facilities",
  "Unlimited Class Pass",
  "10 Class Pass per month",
  "4 Class Pass per month",
];
const membershipOptions = [
  {
    name: "Tier 1",
    perks: [membershipPerks[0], membershipPerks[1]],
    cost: 249,
  },

  {
    name: "Tier 2",
    perks: [membershipPerks[0], membershipPerks[2]],
    cost: 175,
  },
  {
    name: "Tier 3",
    perks: [membershipPerks[0], membershipPerks[3]],
    cost: 99,
  },
];

const Membership = () => {
  return (
    <div
      className={styles.membershipContainer}
      role="region"
      aria-labelledby="membership-heading"
      aria-label="membership options"
    >
      <div
        className={styles.introOfferOuter}
        role="article"
        aria-label="Introductory Membership Offer"
      >
        <h3 id="membership-heading">Introductory Offer</h3>
        <p>€99</p>
        <ul role="list" aria-label="Introductory Membership Offer Perks">
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
        {membershipOptions.map((option) => (
          <div
            key={option.name}
            className={styles.membershipItem}
            id={styles.membershipOne}
            role="article"
            aria-labelledby={`${option.name}-heading`}
            data-testid="membership-plan"
          >
            <h3 id={`${option.name}-heading`}>{option.name}</h3>
            <p data-testid="price">€{option.cost}</p>
            <ul role="list" aria-label={`${option.name} Membership Perks`}>
              {option.perks.map((perk) => (
                <li key={perk} role="listitem">
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Membership;
