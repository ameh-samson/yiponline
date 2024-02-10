import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import AboutUs from "../AboutUs/AboutUs";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hero />
      <AboutUs />
    </div>
  );
};

export default Layout;
