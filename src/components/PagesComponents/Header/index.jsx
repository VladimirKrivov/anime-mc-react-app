import React from "react";
import styles from './Header.module.scss'

function Header() {
    return (
       <header>
           <div className={styles.headerWrapper}>
                <h1>ANIMECRAFT</h1>
           </div>
           <div className={styles.headerLine}></div>
       </header>
    );
}

export default Header;