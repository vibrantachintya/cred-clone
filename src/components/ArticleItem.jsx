import React from "react";
import styles from "../styles/articleitem.module.css";

const ArticleItem = ({item : {category, headline, date, url, link}}) => {
    return (
        <a href={link} target="_blank">
            <div className={styles.container}>
                <img src={url} />
                <div className={styles.container_inner}>
                    <div>
                        <div className={styles.category}>{category}</div>
                        <div className={styles.headline}>{headline}</div>
                    </div>
                    <div className={styles.date}>{date}</div>
                </div>
            </div>
        </a>
    );
};

export default ArticleItem;