import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";

export default class Instrumental {

    scrollMenu = false;

    constructor() {
        makeAutoObservable(this);
    }

    setScrollMenu(bool) {
        this.scrollMenu = bool;
    }


}