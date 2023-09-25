import React from "react";
import styles from './Footer.module.scss'

function Footer() {
    return (
       <footer>
           <div className={styles.footerWrapper}>

               <div className={styles.bottomLineDop1}></div>
               <div className={styles.bottomLineDop2}></div>

               <div className={styles.footerElementWrapper}>
                   <div className={styles.textWrapper}>
                       <div className={styles.heart}></div>
                       <p className={styles.head}>подпишитесь на нас </p>
                       <div className={styles.socialWrapper}>
                           <div className={styles.social1}>
                               <a href="#"></a>
                           </div>
                           <div className={styles.social2}>
                               <a href="#"></a>
                           </div>
                           <div className={styles.social3}>
                               <a href="#"></a>
                           </div>


                       </div>

                       <p>ДЕЛАЕМВЕЩИentertainment</p>
                       <p>2023</p>
                   </div>
                   <div className={styles.navWrapper}>
                       <ul>
                           <li><a href="/account">аккаунт</a></li>
                           <li><a href="">новости</a></li>
                           <li><a href="">магазин</a></li>
                           <li><a href="">пользователи</a></li>
                           <li><a href="">форум</a></li>
                       </ul>
                   </div>
               </div>

               <div className={styles.girl}></div>


           </div>
       </footer>
    );
}

export default Footer;