import jwt from "jsonwebtoken";

import {IToken} from "../types/token";

export enum TOKEN_TYPE{
    access = "access",
    refresh = "refresh"
}

export function generateToken(payload: object): IToken {
    const access = jwt.sign(payload, process.env.PRIVATE_KEY as string, {
        expiresIn: '1h'
    });
    const refresh = jwt.sign(payload, process.env.PRIVATE_KEY as string, {
        expiresIn: '24h'
    });

    return {
        access,
        refresh
    }
}