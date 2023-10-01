import React from "react"
import ReactSkinview3d from "react-skinview3d"
import styles from './AccountPanel.module.scss'
import AppContext from "../../../../context";
import CabinetService from "../../../../services/CabinetService";

// import skin from "../../../../resourses/images/skin.png"

function AccountPanel() {
    const {userInfo, isAuth, showSuccessfulPanelAction, showErrorPanelAction} = React.useContext(AppContext);

    const [closedUpload, setClosedUpload] = React.useState(false);
    const [closedUploadSlim, setClosedUploadSlim] = React.useState(false);
    const [imageSkin, setImageSkin] = React.useState(null);
    const [imageSkinSlim, setImageSkinSlim] = React.useState(null);
    const [skinUrl, setSkinUrl] = React.useState(null);

    const skin = "http://localhost:8080/assets/5ec15e64eb1fd798be836bb3818da661";

    //Загрузить обычный скин
    const uploadSkin = async () => {
        const formData = new FormData();
        formData.append("options", new Blob([JSON.stringify({
            "modelSlim": false
        })], {
            type: "application/json"
        }));
        formData.append("file", imageSkin);
        try {
            const response = await CabinetService.skinLoad(formData);
            showSuccessfulPanelAction("Скин успешно загружен");
            // console.log(response.data.url);
            setSkinUrl(response.data.url)
        } catch (e) {
            showErrorPanelAction(e.response.data.error);
        } finally {
            setClosedUpload(false);
            setClosedUploadSlim(false);
            setImageSkin(null);
            setImageSkinSlim(null);
        }
    }

    //Загрузить слим скин
    const uploadSkinSlim = async () => {
        const formData = new FormData();
        formData.append("options", new Blob([JSON.stringify({
            "modelSlim": true
        })], {
            type: "application/json"
        }));
        formData.append("file", imageSkinSlim);
        try {
            const response = await CabinetService.skinLoad(formData);
            showSuccessfulPanelAction("Скин успешно загружен");
        } catch (e) {
            showErrorPanelAction(e.response.data.error);
        } finally {
            setClosedUpload(false);
            setClosedUploadSlim(false);
            setImageSkin(null);
            setImageSkinSlim(null);
        }
    }


    const handleOnChange = (event) => {
        event.preventDefault();
        setImageSkin(event.target.files[0]);
    }

    const handleOnChangeSlim = (event) => {
        event.preventDefault();
        setImageSkinSlim(event.target.files[0]);
    }

    const nullScanImage = () => {
        if (imageSkin == null) {
            return "Выбрать файл...";
        } else {
            return imageSkin.name;
        }
    }

    const nullScanImageSlim = () => {
        if (imageSkinSlim == null) {
            return "Выбрать файл...";
        } else {
            return imageSkinSlim.name;
        }
    }

    const closeOpenUpload = () => {
        if (closedUpload) {
            setClosedUpload(false);
        } else {
            setClosedUpload(true);
        }
    }

    const closeOpenUploadSlim = () => {
        if (closedUploadSlim) {
            setClosedUploadSlim(false);
        } else {
            setClosedUploadSlim(true);
        }

        // console.log(userInfo.assets.skin);
    }

    return (
        <div className={styles.accountWrapper}>

            <div className={styles.headerLineWrapper}>
                <div className={styles.headerLine2}></div>
                <div className={styles.headerLine1}></div>
                <div className={styles.bottomLineDop1}></div>
                <div className={styles.bottomLineDop2}></div>

            </div>

            <div className={styles.img1}></div>
            <div className={styles.img2}></div>

            {
                isAuth ?


                    <>
                        <div className={styles.blockWrapper}>

                            <div className={styles.accountName}>
                                <div className={styles.icon}></div>
                                <p>{userInfo.username}</p>
                            </div>

                            <div className={styles.settings}>
                                <div className={styles.skinWrapper}>
                                    <ReactSkinview3d
                                        skinUrl={
                                            userInfo && userInfo.assets && userInfo.assets.skin
                                                ? userInfo.assets.skin : skinUrl
                                        }
                                        // skinUrl={skin}
                                        // capeUrl="textures/minecon-cape-2016.png"
                                        height="500"
                                        width="300"
                                    />


                                </div>
                                {/*<img src={skin} alt="skin"/>*/}

                                <div className={styles.accountInfoWrapper}>

                                    <div className={styles.privInfoWrapper}>
                                        <p className={styles.priv}>Privelegies</p>
                                        <p className={styles.info}>У вас нету привелегий(</p>
                                    </div>

                                    {/*Загрузка классического скина*/}
                                    <button onClick={closeOpenUpload} className={styles.accountButton}>Загрузить Classic
                                        скин
                                    </button>
                                    <div className={closedUpload ? styles.inputUpload : styles.dNone}>
                                        <form action="">
                                            <label className={styles.accountButton}
                                                   htmlFor="avatar">{nullScanImage()}</label>
                                            <input
                                                type="file"
                                                id="avatar"
                                                name="avatar"
                                                accept="image/png, image/jpeg"
                                                onChange={handleOnChange}
                                            />
                                        </form>
                                        <button onClick={uploadSkin} className={styles.sendButton}>Отправить</button>
                                    </div>

                                    {/*Загрузка Slim скина*/}
                                    <button onClick={closeOpenUploadSlim} className={styles.accountButton}>Загрузить
                                        Slim скин
                                    </button>
                                    <div className={closedUploadSlim ? styles.inputUpload : styles.dNone}>
                                        <form action="">
                                            <label className={styles.accountButton}
                                                   htmlFor="skin">{nullScanImageSlim()}</label>
                                            <input
                                                type="file"
                                                id="skin"
                                                name="skin"
                                                accept="image/png"
                                                onChange={handleOnChangeSlim}
                                            />
                                        </form>
                                        <button onClick={uploadSkinSlim} className={styles.sendButton}>Отправить
                                        </button>
                                    </div>


                                    {/*<button className={styles.accountButton}>Удалить скин</button>*/}


                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <p>необходима авторизация</p>
            }

        </div>


    );
}

export default AccountPanel;