import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import AboutUs from "../AboutUs/AboutUs";
import GetStarted from "../GetStarted/GetStarted";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hero />
      <AboutUs />
      <GetStarted />
    </div>
  );
};

export default Layout;
