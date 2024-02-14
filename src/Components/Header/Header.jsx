import { FaBars } from "react-icons/fa6";
import NavBar from "./Navbar/NavBar";
import yipOnlineLogo from "../../assets/yip-online-logo.png";
import styles from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src={yipOnlineLogo} alt="" />
        </div>
        <div>
          <button className={styles.menu} onClick={toggleMenu}>
            <FaBars className={styles.menuIcon} />
          </button>
          <NavBar menuOpen={menuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
