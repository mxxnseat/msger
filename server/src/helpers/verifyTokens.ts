import jwt from "jsonwebtoken";
import {TOKEN_TYPE} from "../helpers/generateTokens";
import {IToken} from "../types/token";

export function verifyToken(token: IToken, type: TOKEN_TYPE | null){
    let result: boolean = false;

    if(type === null){
        return result;
    }

    jwt.verify(token[type], process.env.PRIVATE_KEY as string, (err, decode)=>{
        if(err){
            switch (err.name) {
                case 'TokenExpiredError': {
                    if(type === TOKEN_TYPE.refresh){
                        result = false;
                    }else{
                        result = verifyToken(token, TOKEN_TYPE.refresh);
                    }
                    break;
                }
                default: {
                    result = false;
                }
            }
        }else{
            result = true;
        }
        
    });

    return result;
}