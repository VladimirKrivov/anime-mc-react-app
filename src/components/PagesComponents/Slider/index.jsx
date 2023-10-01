import React from "react";
import styles from './Slider.module.scss'
import AppContext from "../../../context";
import ButtonSlider from "../../elements/ButtonSlider";

function Slider() {
    const {userInfo, clickCloseDownload, skinUrl, setSkinUrl} = React.useContext(AppContext);


    return (
       <div className={styles.sliderWrapper}>
           <button onClick={clickCloseDownload}  className={styles.loginButton}>download</button>

           <div className={styles.img1}></div>
           <div className={styles.img2}></div>

           <h1>{skinUrl}</h1>

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