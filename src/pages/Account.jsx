import React from "react";
import "../scss/homePage.scss"

import Header from "../components/PagesComponents/Header";
import Footer from "../components/PagesComponents/Footer";
import AccontPanel from "../components/PagesComponents/AccountComp/AccontPanel";


function Account() {
    return (
        <div className="wrapper-home">
            <Header/>
            <AccontPanel/>

            <Footer/>
        </div>
    );
}

export default Account;