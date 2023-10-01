import axios from "axios";

export const API_URL = `http://localhost:8080`
export const DOWNLOAD_WIN_URL = `http://localhost:3000`
export const DOWNLOAD_MAC_LINUX_URL = `http://localhost:3000`
//http://anime-mc.ru/   //   https://anime-mc.ru/
export const ANIME_MC_URL = `http://localhost:3000`
export const SKIN_URL = `https://anime-mc.ru/assets/`

const $api = axios.create({
    //Куки для каждого запроса автоматически
    withCredentials: true,
    //Значение по умолчанию
    baseURL: API_URL
})

//Interceptor - позволяет автоматически цеплять на каждый запрос access токен
$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(`token`)}`
    return config;
})

export default $api;