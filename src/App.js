import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/HomePage";
import Account from "./pages/Account";
import {observer} from "mobx-react-lite";
import Store from "./store/Store";
import Instrumental from "./store/Instrumental";

import AppContext from './context';
import AuthService from "./services/AuthService";
import axios from "axios";
import {API_URL} from "./http";


function App() {
    const store = new Store();
    const instrumental = new Instrumental();

    const [hiddenErrorPanel, setHiddenErrorPanel] = React.useState(false);

    const [errorLogLogin, setErrorLogLogin] = React.useState(" ");
    const [errorLogReg, setErrorLogReg] = React.useState(" ");

    // state Исчезновение и появление хидера
    const [hiddenMenu, setHiddenMenu] = React.useState(false);
    // Скрыть\показать меню логина
    const [loginPanelButton, setLoginPanelButton] = React.useState(false);
    const clickCloseButton = () => {
        if (loginPanelButton) {
            setLoginPanelButton(false);
        } else {
            setLoginPanelButton(true);
        }
        setErrorLogLogin("")
    }

    // Скрыть\показать меню реги
    const [regPanelButton, setRegPanelButton] = React.useState(false);
    const clickCloseButtonReg = () => {
        if (regPanelButton) {
            setRegPanelButton(false);
        } else {
            setRegPanelButton(true);
        }
    }

    // Показать ошибку логина
    const showErrorPanelAction = () => {
        if (errorLogLogin !== " ") {
            setHiddenErrorPanel(true);
            console.log("до таймера")
            setTimeout(() => { setHiddenErrorPanel(false) }, 3000);
            console.log("после таймера")

        }
    }



    //Авторизация
    const [isAuth, setIsAuth] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState({});
    // Login
    const login = async (username, password) => {
        try {
            const response = await AuthService.login(username, password);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('Rtoken', response.data.refreshToken);
            setIsAuth(true);
            await getUserInfo();
            clickCloseButton();
            const responseInfoUser = await AuthService.userInfo();
            setUserInfo(responseInfoUser.data);
        } catch (e) {
            // console.log(e.responce?.data?.message);
            console.log(e.response.data.code);
            console.log(e.response.data.error);
            setErrorLogLogin(e.response?.data?.error)
            showErrorPanelAction();
        }
    }
    // CheckAutch
    const checkAuth = async () => {
        setLoading(true)
        try {
            const response = await axios.post(`${API_URL}/auth/refresh`,
                {refreshToken: localStorage.getItem('Rtoken')})

            localStorage.setItem('token', response.data.accessToken);
            setIsAuth(true);
        } catch (e) {
            console.log(e.responce?.data?.message);
        } finally {
            setLoading(false);
        }
    }
    // GetUserInfo
    const getUserInfo = async () => {
        try {
            const response = await AuthService.userInfo();
            setUserInfo(response.data);
            console.log(userInfo);
        } catch (e) {
            console.log(e.responce?.data?.message);
        }
    }
    //Logout
    const logout = async () => {
        try {
            const  response = await AuthService.logout();
            console.log(response);
            localStorage.removeItem('token', response.data.accessToken);
            localStorage.removeItem('Rtoken', response.data.refreshToken);
            setIsAuth(false);
            setUserInfo({});
        } catch (e) {
            console.log(e.responce?.data?.message);
        }
    }


    React.useEffect(() => {

        window.addEventListener("scroll", () => {
            setHiddenMenu(window.scrollY > 200);
            console.log(userInfo.username);
        });

        async function scanToken() {
            if (!localStorage.getItem('token') && localStorage.getItem('Rtoken')) {
                await checkAuth();
            }
            if (localStorage.getItem('token') && localStorage.getItem('Rtoken')) {
                await getUserInfo();
                setIsAuth(true);

            }
        }

        async function showError() {

        }


        scanToken();
    }, []);


    return (

        <BrowserRouter>
            <AppContext.Provider
                value={{
                    instrumental,
                    hiddenMenu,
                    store,
                    login,
                    isAuth,
                    loginPanelButton,
                    clickCloseButton,
                    userInfo,
                    clickCloseButtonReg,
                    regPanelButton,
                    errorLogLogin,
                    logout,
                    hiddenErrorPanel
                }}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/account" element={<Account/>}/>
                </Routes>
            </AppContext.Provider>
        </BrowserRouter>
    );
}

export default observer(App);
