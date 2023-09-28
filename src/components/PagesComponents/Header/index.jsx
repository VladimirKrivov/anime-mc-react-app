import React from "react";
import styles from './Header.module.scss'
import AppContext from "../../../context";


function Header() {

    const {hiddenMenu, userInfo, logout, clickCloseButton} = React.useContext(AppContext);


    return (
       <header>
       {/*<header className={hiddenMenu ? " " : styles.displayNone }>*/}
           <div className={styles.headerWrapper}>
               <a href="/">
                   <h1>ANIMECRAFT</h1>
               </a>


               <div className={styles.navMenuWrapper}>
                   <ul>
                       {/*<li><a href="">callback</a></li>*/}
                       {/*<li><a href="">top users</a></li>*/}
                       {/*<li><a href="">account</a></li>*/}
                       <li><a href="">registration</a></li>
                       <li><a onClick={clickCloseButton} href="#">login</a></li>
                       <li><p>{userInfo.username}</p></li>
                       {/*<li><a href="#" onClick={() => logout()}>Logout</a></li>*/}
                   </ul>
               </div>

           </div>
           {/*<div className={styles.headerLine1}></div>*/}
           {/*<div className={styles.headerLine2}></div>*/}
           {/*<div className={styles.headerLineDop1}></div>*/}
           {/*<div className={styles.headerLineDop2}></div>*/}
       </header>
    );
}

export default Header;