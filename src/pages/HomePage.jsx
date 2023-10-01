import React from "react";
import "../scss/homePage.scss"

import Header from "../components/PagesComponents/Header";
import Footer from "../components/PagesComponents/Footer";
import Slider from "../components/PagesComponents/Slider";
import News from "../components/PagesComponents/News";
import TopOfShop from "../components/PagesComponents/TopOfShop";
import TopUsers from "../components/PagesComponents/TopUsers";
import Support from "../components/PagesComponents/Support";
import LoginPanel from "../components/elements/LoginPanel";
import RegistrationPanel from "../components/elements/RegistrationPanel";
import ErrorPanel from "../components/elements/ErrorPanel";
import SuccessfulPanel from "../components/elements/SuccessfulPanel";
import DownloadPanel from "../components/elements/DownloadPanel";

function Home() {


    return (
        <div className="wrapper-home">

            <Header/>
            <Slider/>
            <LoginPanel/>
            <RegistrationPanel/>
            <ErrorPanel/>
            <SuccessfulPanel/>
            <DownloadPanel/>
            {/*<News/>*/}
            {/*<TopOfShop/>*/}
            {/*<TopUsers/>*/}
            {/*<Support/>*/}
            {/*<Footer/>*/}
        </div>
    );
}

export default Home;