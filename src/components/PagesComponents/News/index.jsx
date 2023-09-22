import React from "react";
import styles from './News.module.scss'

function News() {
    return (
        <div className={styles.newsWrapper}>
            <h2>News</h2>
            <div className={styles.newsCardWrapper}>
                <div className={styles.newsCard}>

                </div>
            </div>

            <div className={styles.visor}></div>

        </div>



    );
}

export default News;