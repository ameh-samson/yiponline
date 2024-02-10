import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Hero />
    </div>
  );
};

export default Layout;
