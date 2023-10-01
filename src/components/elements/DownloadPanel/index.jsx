import React from "react";
import '../../../scss/login.css'
import styles from './DownloadPanel.module.scss'
import AppContext from "../../../context";
import {DOWNLOAD_MAC_LINUX_URL, DOWNLOAD_WIN_URL} from "../../../http";

function DownloadPanel() {
    const { downloadPanelButton, clickCloseDownload} = React.useContext(AppContext);

    return (
        <div className={downloadPanelButton ? styles.loginWrapper : styles.loginWrapperOf}
        >
            <div className={styles.loginBox}>
                {/*<h2>Download</h2>*/}
                <div onClick={clickCloseDownload} className={styles.cancel}></div>

                <div className={styles.butWrapper}>
                    <h3>Скачать Minecraft</h3>
                    <p>У тебя уже есть Minecraft? Скачай игру снова</p>

                    <a href={DOWNLOAD_WIN_URL}>Скачать лаунчер для Windows 10/11</a>
                    <h3>Ищешь что-то другое?</h3>
                    <p>Не проблема! Здесь ты сможешь скачать именно то, что нужно</p>
                    <a href={DOWNLOAD_MAC_LINUX_URL}>Скачать лаунчер для Linux/Mac</a>
                </div>


            </div>
        </div>




);
}

export default DownloadPanel;