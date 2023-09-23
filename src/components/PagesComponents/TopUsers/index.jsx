import React from "react";
import styles from './TopUsers.module.scss'

function TopUsers() {
    return (
        <div className={styles.TopUsersWrapper}>

            <div className={styles.bottomLine1}></div>
            <div className={styles.bottomLine2}></div>
            <div className={styles.bottomLineDop1}></div>
            <div className={styles.bottomLineDop2}></div>

            <h2>Top Users</h2>
            <div className={styles.TopUsersCardWrapper}>
                <div className={styles.TopUsersCard}>

                </div>
            </div>

            <div className={styles.visor1}></div>
            <div className={styles.visor2}></div>
            <div className={styles.visor3}></div>
            <div className={styles.visor4}></div>

        </div>



    );
}

export default TopUsers;