import React from "react";
import styles from './TopOfShop.module.scss'

import CardHomePage from "../../elements/CardHomePage"
import ShopButtonHomePage from "../../elements/ShopButtonHomePage"

function TopOfShop() {
    return (

    <div className={styles.topShopWrapper}>

        <div className={styles.topLine1}></div>
        <div className={styles.topLine2}></div>

        <div className={styles.bottomLine1}></div>
        <div className={styles.bottomLine2}></div>

        <div className={styles.divWrapper}>
            <h2>Top Of Shop</h2>
        </div>

        <div className={styles.topShopCardWrapper}>
            <CardHomePage/>
            <CardHomePage/>
            <CardHomePage/>
        </div>

        <ShopButtonHomePage/>

    </div>
    );
}

export default TopOfShop;