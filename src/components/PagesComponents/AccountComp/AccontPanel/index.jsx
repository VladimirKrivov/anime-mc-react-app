import React from "react";
import styles from './AccountPanel.module.scss'

function AccountPanel() {
    return (
        <div className={styles.accountWrapper}>

            <div className={styles.girl1}></div>
            <div className={styles.girl2}></div>

            <div className={styles.blockWrapper}>


                <div className={styles.buttonWrapper}>
                    <div className={styles.button}>
                        <a href="#">скин</a>
                    </div>
                    <div className={styles.button}>
                        <a href="#">баланс</a>
                    </div>
                    <div className={styles.button}>
                        <a href="#">привелегии</a>
                    </div>
                </div>

                <div className={styles.accountName}>
                    <div className={styles.icon}></div>
                    <p>maga_228</p>
                </div>

                <div className={styles.settings}>
                    <img src="#" alt=""/>
                    <div className={styles.accountInfoWrapper}>

                        <div className={styles.accountButton}>
                            <a href="#">Изменить скин</a>
                        </div>
                        <div className={styles.accountButton}>
                            <a href="#">Удалить скин</a>
                        </div>

                        <div className={styles.privInfoWrapper}>
                            <p className={styles.priv}>Privelegies</p>
                            <p className={styles.info}>У вас нету привелегий(</p>
                        </div>


                    </div>
                </div>
            </div>

        </div>



    );
}

export default AccountPanel;