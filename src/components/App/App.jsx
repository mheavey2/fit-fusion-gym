import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import styles from "./App.module.css";
import About from "../About/About";

function App() {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
