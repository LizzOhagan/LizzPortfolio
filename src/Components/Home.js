import React from "react";
import styles from "./Home.module.css";

const home = () => {
  return (
    <>
      <div className={styles.body}>
        <h1>A whole lot of sass!</h1>
        <img
          className={styles.flamingo}
          src="/Images/Flamingo.png"
          alt="flamingo"
        />
        <p>Lizz ...... blah blah blah</p>
      </div>
    </>
  );
};

export default home;
