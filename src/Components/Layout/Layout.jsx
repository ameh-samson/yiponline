import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import AboutUs from "../AboutUs/AboutUs";
import GetStarted from "../GetStarted/GetStarted";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hero />
      <AboutUs />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Layout;
