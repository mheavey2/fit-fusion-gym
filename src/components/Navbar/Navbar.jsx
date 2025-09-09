import styles from "./Navbar.module.css";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <h2>FitFusion Studios</h2>

      <NavbarMenu />
    </div>
  );
};

export default Navbar;
