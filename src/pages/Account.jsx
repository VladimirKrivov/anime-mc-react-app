import React from "react";
import "../scss/homePage.scss"

import Header from "../components/PagesComponents/Header";
import Footer from "../components/PagesComponents/Footer";
import AccontPanel from "../components/PagesComponents/AccountComp/AccontPanel";
import LoginPanel from "../components/elements/LoginPanel";
import RegistrationPanel from "../components/elements/RegistrationPanel";
import ErrorPanel from "../components/elements/ErrorPanel";
import SuccessfulPanel from "../components/elements/SuccessfulPanel";


function Account() {
    return (
        <div className="wrapper-home">
            <Header/>
            <AccontPanel/>
            <LoginPanel/>
            <RegistrationPanel/>
            <ErrorPanel/>
            <SuccessfulPanel/>

            {/*<Footer/>*/}
        </div>
    );
}

export default Account;