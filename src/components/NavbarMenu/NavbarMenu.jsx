import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./NavbarMenu.module.css";

const NavbarMenu = () => {
  const [isHidden, setIsHidden] = useState(true);
  const toggleMenuVisiblility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className={styles.navbarMenuOuter}>
      <button id={styles.navMenuBtn} onClick={toggleMenuVisiblility}>
        <img
          src={isHidden ? "gold-menu.svg" : "gold-x.svg"}
          alt={isHidden ? "Open menu icon" : "close menu icon"}
        />
      </button>
      <div
        className={` ${isHidden ? `${styles.hidden}` : `${styles.navbarMenu}`}`}
      >
        <div className={styles.navbarMenuLinks}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About Us</NavLink>
          <NavLink to="team">The Team</NavLink>
          <NavLink to="classes">Classes</NavLink>
          <NavLink to="membership">Membership</NavLink>
        </div>
      </div>
    </div>
  );
};
export default NavbarMenu;
