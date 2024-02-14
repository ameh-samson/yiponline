import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import AboutUs from "../AboutUs/AboutUs";
import GetStarted from "../GetStarted/GetStarted";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
