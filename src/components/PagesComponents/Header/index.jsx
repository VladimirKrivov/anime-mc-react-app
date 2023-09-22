import React from "react";
import styles from './Header.module.scss'


function Header() {
    return (
       <header>
           <div className={styles.headerWrapper}>
                <h1>ANIMECRAFT</h1>

               <div className={styles.navMenuWrapper}>
                   <ul>
                       <li><a href="">callback</a></li>
                       <li><a href="">top users</a></li>
                       <li><a href="">shop</a></li>
                       <li><a href="">news</a></li>
                   </ul>
               </div>

           </div>
           <div className={styles.headerLine1}></div>
           <div className={styles.headerLine2}></div>
       </header>
    );
}

export default Header;