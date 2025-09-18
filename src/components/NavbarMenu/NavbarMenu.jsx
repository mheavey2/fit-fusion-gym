import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import styles from "./NavbarMenu.module.css";

const NavbarMenu = () => {
  const [isHidden, setIsHidden] = useState(true);
  const toggleMenuVisiblility = () => {
    setIsHidden(!isHidden);
  };
  const navMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
        console.log("Closing menu - click outside detected");
        setIsHidden(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.navbarMenuOuter} ref={navMenuRef}>
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
          <NavLink
            to="/"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            About Us
          </NavLink>
          <NavLink
            to="team"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            The Team
          </NavLink>
          <NavLink
            to="classes"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            Classes
          </NavLink>
          <NavLink
            to="membership"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            Membership
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default NavbarMenu;
