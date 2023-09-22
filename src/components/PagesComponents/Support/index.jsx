import React from "react";
import styles from './Support.module.scss'

function Support() {
    return (
        <div className={styles.SupportWrapper}>
            <div className={styles.SupportCardWrapper}>
                <div className={styles.visor}></div>
                <div className={styles.girl}></div>
                <div className={styles.SupportCard}></div>

                <p>Сообщите о проблеме</p>
                <form action="" method="get" className={styles.form}>
                    <div className={styles.lable}>
                        <label htmlFor="name">user id: </label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div className={styles.lable}>
                        <label htmlFor="email">text: </label>
                        <input type="text" name="text" id="text" required/>
                    </div>
                    <div>
                        <input type="submit" value="Отправить!!"/>
                    </div>
                </form>

            </div>



        </div>



    );
}

export default Support;