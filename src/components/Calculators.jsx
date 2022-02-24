import React from "react";
import { useEffect } from "react";
import styles from "../styles/calculators.module.css";
import calculators from "../data/calculators";
import CalculatorItem from "./CalculatorItem";
import Header from "./Header";

const Calculators = ({showPopup}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <>
            <Header displayPopup={showPopup} />
            <section className={styles.section_calculators}>
                <div>
                    <div className={styles.calculators_heading}>calculators</div>
                    <div className={styles.calculators_text}>from finding returns on investments to the ideal EMI to pay for your dream car: take the first step towards securing your financial health with the help of these calculators</div>
                </div>
                <div className={styles.calculators_containers}>
                    {calculators.map((calculator) => (
                        <CalculatorItem item={calculator} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Calculators;