import $api from "../http";
import {AxiosResponse} from "axios";

export default class CabinetService {

    static async skinLoad(formData): Promise<AxiosResponse> {
        return  $api.post('/cabinet/upload/skin', formData)

    }

}
