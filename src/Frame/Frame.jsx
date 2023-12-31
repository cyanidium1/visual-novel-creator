import React from "react";
import styles from "./Frame.module.css";

const Frame = (plot) => {
  const { fr, text, bg, b1, b2, b3, f1, f2, f3 } = plot.plot;
  console.log(plot.deleteItem);
  return (
    <div className={styles.frame}>
      <p className={styles.item}>{bg}</p>
      <p className={styles.item}>{fr}</p>
      <p className={styles.item}>{text}</p>
      <div className={styles.btns}>
        <p className={styles.item}>
          {f1}: {b1}
        </p>
        <p className={styles.item}>
          {f2}: {b2}
        </p>
        <p className={styles.item}>
          {f3}: {b3}
        </p>
      </div>
      <button
        onClick={() => {
          plot.deleteItem(plot.plot);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Frame;
