import React from "react";
import '../../../scss/login.css'
import styles from './LoginPanel.module.scss'
import AppContext from "../../../context";

function LoginPanel() {
    const {store, login, loginPanelButton, clickCloseButton, errorLogLogin} = React.useContext(AppContext);




    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');


    return (
        <div className={loginPanelButton ? styles.loginWrapper : styles.loginWrapperOf}
        >
            <div className={styles.loginBox}>
                <h2>Login</h2>


                <form>
                    <div className={styles.userBox}>
                        <div onClick={clickCloseButton} className={styles.cancel}></div>
                        <input
                            onChange={e => setUserName(e.target.value)}
                            value={userName}
                            type="text"
                        />
                        <label>Username</label>
                    </div>
                    <div className={styles.userBox}>
                        <input
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="password"
                            value={password}
                        />
                        <label>Password</label>
                    </div>

                    {/*<p>{errorLogLogin}</p>*/}

                    {/*<button>*/}
                    {/*    <span></span>*/}
                    {/*    <span></span>*/}
                    {/*    <span></span>*/}
                    {/*    <span></span>*/}
                    {/*    Sign in*/}
                    {/*</button>*/}

                    <a href="#" onClick={() => login(userName, password)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Sign in
                    </a>
                </form>



            </div>
        </div>




);
}

export default LoginPanel;