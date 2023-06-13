import React from "react";
import styles from "./Display.module.css";
import Frame from "../Frame/Frame";

const Display = ({ plot }) => {
  return (
    <>
      <div className={styles.display}>
        <h3 className={styles.head}>Your novel scenario</h3>
        {plot.map((item) => (
          <Frame plot={item} key={Math.random()}/>
        ))}
      </div>
    </>
  );
};

export default Display;
