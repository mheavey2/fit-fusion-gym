import styles from "./Navbar.module.css";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <NavLink to="/" id={styles.navbarLinkHome}>
        FitFusion Studios
      </NavLink>

      <NavbarMenu />
    </div>
  );
};

export default Navbar;
