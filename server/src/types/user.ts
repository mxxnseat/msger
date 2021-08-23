import { Schema } from "mongoose";
import {IToken} from "./token";

export interface IUser{
    _id: Schema.Types.ObjectId,
    username: string,
    password: string,
    friends?: any[], // TODO in future for friends will be interface
    channels?: any[], // TODO
    tokens: IToken
}