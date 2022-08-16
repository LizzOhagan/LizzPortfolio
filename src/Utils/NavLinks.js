// import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavLinks = (props) => {
  return (
    <ul className={styles.nav}>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        {/* <Link to="/home">Home</Link> */}
        <a className={styles.navLinks} href="/">
          Home
        </a>{" "}
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        {/* <Link to="/about">About</Link> */}
        <a className={styles.navLinks} href="/about">
          About
        </a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        {/* <Link to="/portfolio">Projects</Link> */}
        <a className={styles.navLinks} href="/portfolio">
          Projects
        </a>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        {/* <Link to="/contact">Contact</Link> */}
        <a className={styles.navLinks} href="/contact">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
