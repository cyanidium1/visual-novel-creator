import React from "react";
import styles from "./Frame.module.css";

const Frame = ({plot}) => {
  const { frame, text, bg, btn1, btn2, btn3, btn1to, btn2to, btn3to } = plot;
  return (
    <div className={styles.frame}>
      {/* <img src={bg} alt="" /> */}
      <p className={styles.item}>{bg}</p>
      <p className={styles.item}>{frame}</p>
      <p className={styles.item}>{text}</p>
      <div className={styles.btns}>
        <p className={styles.item}>
          {btn1}: {btn1to}
        </p>
        <p className={styles.item}>
          {btn2}: {btn2to}
        </p>
        <p className={styles.item}>
          {btn3}: {btn3to}
        </p>
      </div>
    </div>
  );
};

export default Frame;
