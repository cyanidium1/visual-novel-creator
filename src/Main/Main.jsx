import React, { useState } from "react";
import Create from "../Create/Create";
import Display from "../Display/Display";
import styles from "./Main.module.css";
import Result from "../Result/Result";

const Main = () => {
  const [plot, changePlot] = useState([
    { fr: "p0", text: "Here goes some frame text", b1: "Choose 1 variant", f1: "p1", b2: "Better second one ", f2: "p2", b3: "Or maybe 3rd...", f3: "p3", bg: "httpto your image" },
  ]);

  function updPlot(x) {
    changePlot([...plot, x]);
  }

  return (
    <>
      <h1 className={styles.head}>Visual novel creator</h1>
      <div className={styles.main}>
        <Create updPlot={updPlot} />
        <Display plot={plot} />
        <Result plot={plot} />
      </div>
    </>
  );
};

export default Main;
