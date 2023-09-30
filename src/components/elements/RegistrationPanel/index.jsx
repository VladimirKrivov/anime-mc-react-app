import React from "react";
import '../../../scss/login.css'
import styles from './RegistrationPanel.module.scss'
import AppContext from "../../../context";

function RegistrationPanel() {
    const {store, login, loginPanelButton, clickCloseButtonReg, regPanelButton, registration} = React.useContext(AppContext);




    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');


    return (
        <div className={regPanelButton ? styles.loginWrapper : styles.loginWrapperOf}
        >
            <div className={styles.loginBox}>
                <h2>Registration</h2>

                <form>
                    <div className={styles.userBox}>
                        <div onClick={clickCloseButtonReg} className={styles.cancel}></div>
                        <input
                            onChange={e => setUserName(e.target.value)}
                            value={userName}
                            type="text"
                        />
                        <label>Username</label>
                    </div>
                    <div className={styles.userBox}>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            value={email}
                        />
                        <label>Email</label>
                    </div>
                    <div className={styles.userBox}>
                        <input
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            value={password}
                        />
                        <label>Password</label>
                    </div>
                    <a href="#" onClick={() => registration(userName, email, password)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Registration
                    </a>
                </form>



            </div>
        </div>




);
}

export default RegistrationPanel;