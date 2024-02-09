import styles from "./NavBar.module.scss";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <NavBarItem />
      </ul>
    </nav>
  );
};

export default NavBar;
