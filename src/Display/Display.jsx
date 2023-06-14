import React from "react";
import styles from "./Display.module.css";
import Frame from "../Frame/Frame";

const Display = (plot, deleteItem) => {
  return (
    <>
      <div className={styles.display}>
        <h3 className={styles.head}>Your novel scenario</h3>
        {plot.plot.map((item) => (
          <Frame plot={item} key={Math.random()} deleteItem={plot.deleteItem}/>
        ))}
      </div>
    </>
  );
};

export default Display;
