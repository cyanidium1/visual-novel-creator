import React, {useState} from "react";
import Create from "../Create/Create";
import Display from "../Display/Display";
import styles from "./Main.module.css";
import Result from "../Result/Result";

const Main = () => {
  const [plot, changePlot] = useState({
    'p0': {
      p: 'text example',
      b1: 'click 1',
      f1: 'p1',
      bg: 'httpto',
    }
  });

  function updPlot(x) {
    changePlot([...plot, x])
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
