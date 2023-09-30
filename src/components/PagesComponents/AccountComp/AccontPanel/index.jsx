import React from "react";
import styles from './AccountPanel.module.scss'
import AppContext from "../../../../context";
import $api from "../../../../http";
import axios from "axios";
// import AuthService from "../../../../services/AuthService";

function AccountPanel() {
    const {userInfo, isAuth} = React.useContext(AppContext);
    const [closedUpload, setClosedUpload] = React.useState(false);
    const [imageSkin, setImageSkin] = React.useState();

    const uploadSkin = async () => {
        try {
            $api.post('/cabinet/upload/skin', {
                "variant": "slim",
                "file": imageSkin,
            })
        } catch (e) {
        // console.log(e.responce?.data?.message);
        console.log(e);
        console.log(e.response.data.code);
        console.log(e.response.data.error);
    }


        // try {
        //     const response = await axios({
        //         method: "post",
        //         url: "http://localhost:8080/cabinet/upload/skin",
        //         data: imageSkin,
        //         headers: { "Content-Type": "multipart/form-data" },
        //     });
        // } catch(error) {
        //     console.log(error)
        // }




    }


    const handleOnChange = (event) => {
        event.preventDefault();
        console.log("change", event.target.files)
        const file = event.target.files[0];
        setImageSkin(file[0])
    }

    const closeOpenUpload = () => {
      if (closedUpload) {
          setClosedUpload(false);
      } else {
          setClosedUpload(true);
      }
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
                                <img src="#" alt=""/>
                                <div className={styles.accountInfoWrapper}>


                                    <div className={styles.accountButton}>
                                        <a onClick={closeOpenUpload} href="#">Изменить скин</a>
                                    </div>

                                    <div className={closedUpload ? styles.inputUpload : styles.dNone}>
                                        <form action="">
                                            <label htmlFor="avatar">Choose a skin picture:</label>
                                            <input
                                                type="file"
                                                id="avatar"
                                                name="avatar"
                                                accept="image/png, image/jpeg"
                                                onChange={handleOnChange}
                                            />
                                        </form>
                                        <div className={styles.accountButton}>
                                            <a onClick={uploadSkin} href="#">Отправить</a>
                                        </div>
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
                    </>
                    :
                    <p>необходима авторизация</p>
            }

        </div>


    );
}

export default AccountPanel;