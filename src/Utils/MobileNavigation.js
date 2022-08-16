import React from "react";
import NavLinks from "./NavLinks";
import styles from "./NavBar.module.css";
import { CgMenu } from "react-icons/cg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

const MobileNavigation = () => {
  const [openhamburger, setOpenHamburger] = useState(false);

  const hamburgerIcon = (
    <CgMenu
      className={styles.hamburger}
      size="40px"
      color="rgb(255, 0, 144)"
      onClick={() => setOpenHamburger(!openhamburger)}
    />
  );

  const closeIcon = (
    <IoIosCloseCircleOutline
      className={styles.hamburger}
      size="40px"
      color="pink"
      onClick={() => setOpenHamburger(!openhamburger)}
    />
  );

  const closeMobileMenu = () => setOpenHamburger(false);

  return (
    <nav className={styles.mobileNav}>
      {openhamburger ? closeIcon : hamburgerIcon}
      {openhamburger && (
        <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
      ;
    </nav>
  );
};

export default MobileNavigation;
