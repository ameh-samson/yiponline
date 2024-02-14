import { FaBars } from "react-icons/fa6";
import NavBar from "./Navbar/NavBar";
import yipOnlineLogo from "../../assets/yip-online-logo.png";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useGlobalContext();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={yipOnlineLogo} alt="" />
          </Link>
        </div>
        <div>
          <button className={styles.menu} onClick={toggleMenu}>
            <FaBars className={styles.menuIcon} />
          </button>
          <NavBar menuOpen={isMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
