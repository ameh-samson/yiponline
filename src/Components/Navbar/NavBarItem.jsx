import styles from "./NavBarItem.module.scss";

const NavBarItem = () => {
  return (
    <>
      <li className={styles.navLink}>
        <a href="">Home </a>
      </li>
      <li className={styles.navLink}>
        <a href="">Products</a>
      </li>
      <li className={styles.navLink}>
        <a href="">Careers </a>
      </li>
      <li className={styles.navLink}>
        <a href="">Contact Us</a>
      </li>
      <li className={`${styles.navLink} ${styles.joinUs}`}>
        <a href="">Join Us </a>
      </li>
    </>
  );
};

export default NavBarItem;
