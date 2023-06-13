import React from 'react';
import styles from './Result.module.css'

const Result = ({plot}) => {
    let output = JSON.stringify(plot);
    console.log(output);
    return (
        <div className={styles.output}>
            <h3 className={styles.head}>Output</h3>
            <p className={styles.text}>
                {output}
            </p>
        </div>
    );
};

export default Result;