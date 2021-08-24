import axios, { AxiosResponse } from "axios";
import { IAuth } from "../types/auth";

export class Authenticate{
    private _token: string | null;

    constructor(){
        this._token = localStorage.getItem("token");
    }

    async checkLogin(): Promise<IAuth | null>{
        if(this._token === null){
            return null;
        }

        const response = await axios.post<IAuth>("/auth/checkLogin", {
            Headers: {
                Authorization: `Bearer ${this._token}`
            }
        });

        return response.data;
    }
}