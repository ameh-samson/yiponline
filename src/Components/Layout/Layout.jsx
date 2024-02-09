import styles from "./Layout.module.css";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
};

export default Layout;
