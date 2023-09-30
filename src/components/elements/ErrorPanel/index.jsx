import React from "react";
import '../../../scss/login.css'
import styles from './ErrorPanel.module.scss'
import AppContext from "../../../context";


function ErrorPanel() {
    const {store, login, loginPanelButton, clickCloseButton, hiddenErrorPanel, errorLogLogin, successfulLog} = React.useContext(AppContext);




    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');


    return (

        <div className={hiddenErrorPanel ? styles.errorWrapper : styles.errorWrapperOff }>
            <div>
                <p>Error: {errorLogLogin}</p>
                {/*<p>Error: User not found</p>*/}
            </div>
        </div>




);
}

export default ErrorPanel;