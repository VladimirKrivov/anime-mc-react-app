import React from "react";
import styles from './CardHomePage.module.scss'
import cardFake from "../../../resourses/images/homePage/shop.svg"


function CardHomePage() {
    return (
       <div className={styles.cardWrapper}>
           <div className={styles.imageWrapper}>
               <img src={cardFake} alt="shop"/>
           </div>

           <div className={styles.textWrapper}>
               <p>gold case</p>
               <p>300 RUB</p>
           </div>
       </div>
    );
}

export default CardHomePage;