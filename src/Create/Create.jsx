import React from "react";
import styles from "./Create.module.css";

const Create = (props) => {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('smth works smth not...');
    props.updPlot({
      [e.target.frame.value]: {
        p: e.target.text.value,
        bg: e.target.bg.value,
        b1: e.target.btn1.value,
        b2: e.target.btn2.value,
        b3: e.target.btn3.value,
        f1: e.target.btn1to.value,
        f2: e.target.btn2to.value,
        f3: e.target.btn3to.value}
    })
  }

  return (
    <div className={styles.create}>
      <h3 className={styles.head}>Enter data</h3>
      <form className={styles.box} onSubmit={handleSubmit}>
        <input
          className={styles.num}
          type="text"
          name="frame"
          placeholder="Frame num"
        />
        <input
          className={styles.text}
          type="text"
          name="bg"
          placeholder="Image link"
        />

        <textarea type="text" name="text" placeholder="Frame text" />
        <div className={styles.item}>
          <input
            className={styles.num}
            type="text"
            name="btn1to"
            placeholder="Btn 1 to"
          />
          <input
            className={styles.text}
            type="text"
            name="btn1"
            placeholder="Btn 1 text"
          />
        </div>
        <div className={styles.item}>
          <input
            className={styles.num}
            type="text"
            name="btn2to"
            placeholder="Btn 2 to"
          />
          <input
            className={styles.text}
            type="text"
            name="btn2"
            placeholder="Btn 2 text"
          />
        </div>
        <div className={styles.item}>
          <input
            className={styles.num}
            type="text"
            name="btn3"
            placeholder="Btn 3 to"
          />
          <input
            className={styles.text}
            type="text"
            name="btn3to"
            placeholder="Btn 3 text"
          />
        </div>
        <button className={styles.button} type="submit">
          Add frame
        </button>
      </form>
    </div>
  );
};

export default Create;
