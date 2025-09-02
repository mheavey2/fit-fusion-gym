import { NavLink } from "react-router-dom";
import styles from "./NavbarMenu.module.css";

export const NavbarMenu = () => {
  return (
    <div className={styles.navbarMenuOuter}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/team">The Team</NavLink>
      <NavLink to="/classes">Classes</NavLink>
      <NavLink to="/membership">Membership</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
    </div>
  );
};
