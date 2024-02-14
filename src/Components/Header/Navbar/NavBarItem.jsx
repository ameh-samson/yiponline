import styles from "./NavBarItem.module.scss";
import { Link } from "react-router-dom";

const NavBarItem = ({ menuOpen }) => {
  return (
    <>
      <li className={styles.navLink}>
        <Link to="/" onClick={menuOpen}>
          Home
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link to="/products" onClick={menuOpen}>
          Products
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link to="/career" onClick={menuOpen}>
          Careers
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link to="/contact" onClick={menuOpen}>
          Contact Us
        </Link>
      </li>
      <li className={`${styles.navLink} ${styles.joinUs}`}>
        <Link to="/signup" onClick={menuOpen}>
          Join Us
        </Link>
      </li>
    </>
  );
};

export default NavBarItem;
