import MobileNavigation from "./MobileNavigation";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <MobileNavigation />
    </div>
  );
};

export default NavBar;
