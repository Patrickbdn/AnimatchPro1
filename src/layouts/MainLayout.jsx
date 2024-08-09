import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./MainLayout.module.css";

function MainLayout({ children }) {
  return (
    <div className="App">
      <Header />
      <div className={styles.mainlayout}>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
