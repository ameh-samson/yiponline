import { FaBars } from "react-icons/fa6";
import NavBar from "../Navbar/NavBar";
import yipOnlineLogo from "../../assets/yip-online-logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src={yipOnlineLogo} alt="" />
        </div>
        <button className={styles.menu}>
          <FaBars />
        </button>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
