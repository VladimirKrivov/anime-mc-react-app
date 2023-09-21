import React from "react";
import "../scss/homePage.scss"

import Header from "../components/PagesComponents/Header";
import Footer from "../components/PagesComponents/Footer";

function Home() {
    return (
        <div className="wrapper-home">
            <Header/>
            <h1>ANIME CRAFT</h1>
            <Footer/>
        </div>
    );
}

export default Home;