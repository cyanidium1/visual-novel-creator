import React from "react";
import styles from "./Result.module.css";

const Result = ({ plot }) => {
  // let output = JSON.stringify(plot);

  // JSON.stringify(plot)

  const output = "{"+plot.map(
    (el) =>
      `"${el.fr}":` +
      JSON.stringify({
        p: el.text === undefined ? "" : el.text,
        b1: el.b1 === undefined ? "" : el.b1,
        b2: el.b2 === undefined ? "" : el.b2,
        b3: el.b3 === undefined ? "" : el.b3,
        f1: el.f1 === "p" ? "" : el.f1,
        f2: el.f2 === "p" ? "" : el.f2,
        f3: el.f3 === "p" ? "" : el.f3,
        bg: el.bg === undefined ? "" : el.bg,
      })
  ).toString()+"}";
  console.log(output);
  return (
    <div className={styles.output}>
      <h3 className={styles.head}>Output json file</h3>
      <p className={styles.text}>{output}</p>
    </div>
  );
};

export default Result;
