import styles from "./Navbar.module.css";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className={styles.navbarContainer}
      role="navigation"
      aria-label="Main Navigation"
    >
      <NavLink to="/" id={styles.navbarLinkHome} role="menuitem">
        FitFusion Studios
      </NavLink>

      <NavbarMenu />
    </div>
  );
};

export default Navbar;
