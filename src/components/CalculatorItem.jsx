import React from "react";
import styles from "../styles/calculatoritem.module.css";

const CalculatorItem = ({item : {category, title, img, span}}) => {
    return (
        <a href="" className={styles.container} style={{backgroundImage:`url("/assets/images/${img}")`, gridColumnEnd:`span ${span}`}}>
            <div>
                <div className={styles.category}>{category}</div>
                <div className={styles.title}>{title}</div>
            </div>
            <div>
                <div className={styles.button}>Try Now</div>
            </div>
        </a>
    );
};

export default CalculatorItem;