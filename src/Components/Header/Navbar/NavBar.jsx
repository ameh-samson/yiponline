import styles from "./NavBar.module.scss";
import NavBarItem from "./NavBarItem";

const NavBar = ({ menuOpen }) => {
  const navClass = `${styles.navContainer} ${menuOpen ? styles.navOpen : ""}`;

  return (
    <nav className={navClass}>
      <ul>
        <NavBarItem />
      </ul>
    </nav>
  );
};

export default NavBar;
