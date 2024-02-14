import { useGlobalContext } from "../../Context/Context";
import styles from "./NavBarItem.module.scss";
import { Link } from "react-router-dom";

const NavBarItem = () => {
  const { handleLinkClick } = useGlobalContext();

  return (
    <>
      <li className={styles.navLink}>
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link to="/products" onClick={handleLinkClick}>
          Products
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link to="/career" onClick={handleLinkClick}>
          Careers
        </Link>
      </li>
      <li className={styles.navLink}>
        <Link to="/contact" onClick={handleLinkClick}>
          Contact Us
        </Link>
      </li>
      <li className={`${styles.navLink} ${styles.joinUs}`}>
        <Link to="/signup" onClick={handleLinkClick}>
          Join Us
        </Link>
      </li>
    </>
  );
};

export default NavBarItem;
