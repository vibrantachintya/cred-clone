import React from "react";
import styles from "../styles/popup.module.css";

const Popup = ({hidePopup}) => {
    return (
        <>
        <section className={styles.section_popup}>
            <div className={styles.section_popup_container}>
                <div className={styles.section_popup_left}>
                    <div className={styles.section_popup_text_bold}>enter your phone number to get the link via SMS</div>
                    <div className={styles.section_popup_text_normal}>alternatively, <span className={styles.section_popup_text_normal_bold}>scan QR code</span></div>
                    <div className={styles.section_popup_number_container}>
                        <div className={styles.section_popup_number_start}>+91</div>
                        <input type="text" placeholder="9999988888" />
                        <div className={styles.section_popup_number_submit}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="25"><g fill-rule="evenodd" transform="translate(-1019 -633)"><path fill="#fff" fill-rule="nonzero" d="M1032.288 645.143a1.81 1.81 0 00-.48-1.047l-9.968-10.582a1.6 1.6 0 00-1.61-.453c-.574.165-1.022.643-1.175 1.254s.014 1.26.436 1.707l8.787 9.328-8.787 9.328c-.422.445-.588 1.096-.436 1.707s.6 1.09 1.175 1.254a1.6 1.6 0 001.61-.453l9.968-10.582a1.83 1.83 0 00.48-1.461z"></path></g></svg>
                        </div>
                    </div>
                    <div className={styles.section_popup_icons}> 
                        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png" />
                        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png" />
                    </div>
                </div>
                <div onClick={hidePopup} className={styles.section_popup_close}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" stroke="#f8f8f8" fill="none" stroke-linecap="square" stroke-width=".9"><path d="M1.455 1.452l19.09 18.095"></path><path d="M20.545 1.452L1.455 19.548"></path></svg>
                </div>
            </div>
        </section>     
        </>
    )
};

export default Popup;