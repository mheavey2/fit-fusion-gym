import Navbar from "../Navbar/Navbar";
import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import Contact from "../Contact/Contact";

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar role="navigation" />
      <Outlet />
      <Contact id="contact" role="complementary" />
    </div>
  );
}

export default App;
