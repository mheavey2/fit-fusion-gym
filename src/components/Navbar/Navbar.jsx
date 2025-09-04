import styles from "./Navbar.module.css";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <h1>Hello</h1>
      <NavbarMenu />
    </div>
  );
};

export default Navbar;
