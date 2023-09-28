import React from "react";
import styles from './ButtonSlider.module.scss'
import AppContext from "../../../context";


function ButtonSlider() {
    const {clickCloseButton} = React.useContext(AppContext);
    return (
        <div className={styles.buttonWrapper}>


            <button  className={styles.loginButton}>Registrarion</button>
            <button
                onClick={clickCloseButton}
                className={styles.loginButton}>login
            </button>


        </div>
    );
}

export default ButtonSlider;