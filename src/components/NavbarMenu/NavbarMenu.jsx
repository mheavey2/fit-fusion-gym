import { NavLink } from "react-router-dom";
import styles from "./NavbarMenu.module.css";

const NavbarMenu = () => {
  return (
    <div className={styles.navbarMenuOuter}>
      <div className={styles.navbarExitContainer}>
        <img src="gold-x.svg" alt="gold x exit menu icon" />
      </div>

      <div className={styles.navbarMenuLinks}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/team">The Team</NavLink>
        <NavLink to="/classes">Classes</NavLink>
        <NavLink to="/membership">Membership</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
    </div>
  );
};
export default NavbarMenu;
