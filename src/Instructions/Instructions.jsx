import React, { useState } from "react";
import styles from "./Instructions.module.css";

const Instructions = () => {
  const [visibility, changeVisibility] = useState("none");
  const toggleMenu = () => {
    visibility === "none"
      ? changeVisibility("block")
      : changeVisibility("none");
    console.log(visibility);
  };
  return (
    <div className={styles.box}>
      <button onClick={toggleMenu}>Show info</button>
      <p className={styles.text} style={{ display: visibility }}>
        {" "}
        А вы думали тут что-то будет?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam
        magni dolore reiciendis similique vitae quam omnis quasi repudiandae
        quisquam ipsa provident. Neque autem necessitatibus, tenetur reiciendis
        consequuntur quo hic!{" "}
      </p>
    </div>
  );
};

export default Instructions;
