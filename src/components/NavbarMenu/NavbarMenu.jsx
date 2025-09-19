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
    <div
      className={styles.navbarMenuOuter}
      ref={navMenuRef}
      role="menu"
      aria-expanded={!isHidden}
    >
      <button
        id={styles.navMenuBtn}
        onClick={toggleMenuVisiblility}
        aria-controls="navbar-menu"
        aria-expanded={!isHidden}
        aria-label={isHidden ? "Open menu" : "Close menu"}
      >
        <img
          src={isHidden ? "gold-menu.svg" : "gold-x.svg"}
          alt={isHidden ? "Open menu icon" : "close menu icon"}
        />
      </button>
      <div
        id="navbar-menu"
        className={` ${isHidden ? `${styles.hidden}` : `${styles.navbarMenu}`}`}
        role="menu"
      >
        <div className={styles.navbarMenuLinks}>
          <NavLink
            to="/"
            role="menuitem"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            role="menuitem"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            About Us
          </NavLink>
          <NavLink
            to="team"
            role="menuitem"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            The Team
          </NavLink>
          <NavLink
            to="classes"
            role="menuitem"
            onClick={() => {
              setIsHidden(true);
            }}
          >
            Classes
          </NavLink>
          <NavLink
            to="membership"
            role="menuitem"
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
