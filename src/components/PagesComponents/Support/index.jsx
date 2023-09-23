import React from "react";
import styles from './Support.module.scss'

function Support() {
    return (
        <div className={styles.SupportWrapper}>



            <div className={styles.SupportCardWrapper}>
                <div className={styles.visor}></div>
                <div className={styles.girl}></div>
                <div className={styles.SupportCard}></div>

                <p>Сообщить о проблеме</p>
                <form action="" method="get" className={styles.form}>
                    <div className={styles.lable}>
                        <label htmlFor="user_id">user id: </label>
                        <input placeholder="user_id" type="text" name="user_id" id="user_id" required/>
                    </div>
                    <div className={`${styles.lable}`}>
                        <label htmlFor="text">text: </label>
                        {/*<input  placeholder="опишите проблему..." type="text" name="text" id="text" required/>*/}
                        <textarea placeholder="опишите проблему..." className={styles.inputText}  name="text" rows="14" cols="80" wrap="soft"></textarea>
                    </div>
                    <div className={styles.submitButtWrapper}>
                        <input type="submit" value="ОТПРАВИТЬ"/>
                    </div>
                </form>

            </div>


        </div>


    );
}

export default Support;