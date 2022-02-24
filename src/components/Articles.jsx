import React from "react";
import { useEffect } from "react";
import styles from "../styles/articles.module.css";
import ArticleItem from "./ArticleItem";
import articles from "../data/articles";
import Header from "./Header";

const Articles = ({title, showPopup}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <>
            <Header displayPopup={showPopup} />
            <section className={styles.section_articles}>
                <div>
                    <div className={styles.articles_heading}>{title}</div>
                    <div className={styles.articles_text}>the journal of credit card usage comprises of articles related to credit scores, banking & financial services and the combination of exciting rewards.</div>
                </div>
                <div className={styles.articles_containers}>
                    {articles.map((article) => (
                        <ArticleItem item={article} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Articles;