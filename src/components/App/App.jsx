import { Navbar } from "../Navbar/Navbar";
import { Hero } from "../Hero/Hero";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
