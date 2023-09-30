import React from "react";
import '../../../scss/login.css'
import styles from './SuccessfulPanel.module.scss'
import AppContext from "../../../context";


function SuccessfulPanel() {
    const {hiddenSuccessfulPanel, successfulLog} = React.useContext(AppContext);




    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');


    return (

        <div className={hiddenSuccessfulPanel ? styles.errorWrapper : styles.errorWrapperOff }>
            <div>
                <p>{successfulLog}</p>
                {/*<p>Error: User not found</p>*/}
            </div>
        </div>




);
}

export default SuccessfulPanel;