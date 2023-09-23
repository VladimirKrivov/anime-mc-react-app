import React from "react";
import styles from './Slider.module.scss'

function Slider() {
    return (
       <div className={styles.sliderWrapper}>
           <h1>ANIMECRAFT</h1>
           <div className={styles.tyanWrapper}>
               <div className={styles.img1}></div>
               <div className={styles.img2}></div>
           </div>

           <div className={styles.headerLineWrapper}>
               <div className={styles.headerLine2}></div>
               <div className={styles.headerLine1}></div>
               <div className={styles.bottomLineDop1}></div>
               <div className={styles.bottomLineDop2}></div>

           </div>


           <div>

           </div>
       </div>
    );
}

export default Slider;