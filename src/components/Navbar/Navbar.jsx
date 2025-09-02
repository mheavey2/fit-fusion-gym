import styles from "./Navbar.module.css";
import { NavbarMenu } from "../NavbarMenu/NavbarMenu";

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <h1>Hello</h1>
      <NavbarMenu />
    </div>
  );
};
