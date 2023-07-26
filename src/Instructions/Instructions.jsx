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
      <button onClick={toggleMenu}>Info, FAQ, About</button>
      <p className={styles.text} style={{ display: visibility }}>
        Recomended to name images as frames. Do not put "p" before numbers. I
        used this code to create Urbex Metro novel (it is already in VNE). If
        you refresh the page scenario will be deleted!
        <p>/</p>
        <a
          href="https://github.com/cyanidium1/visual-novel-creator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code of VNC
        </a>
        <p>/</p>
        <a
          href="https://github.com/cyanidium1/visual-novel-engine-v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code of VNE
        </a>
        <p>/</p>
        <a
          href="https://cyanidium1.github.io/visual-novel-engine-v2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          VNE with Urbex Metro
        </a>
      </p>
    </div>
  );
};

export default Instructions;
