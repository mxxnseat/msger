import { FC, ChangeEvent } from "react";
import {IInputProps} from "../types/props";

const Input: FC<IInputProps> = ({placeholder, type, value, cb, field}) => {

    const inputHandler = (e: ChangeEvent)=>{
        const target = e.target as HTMLInputElement;
        cb(field, target.value);
    }

    return (
        <>
            <label className="authform__label">
                <span className="authform__top-placeholder">{placeholder}</span>
                <input type={type} className="input" value={value} onChange={inputHandler} />
            </label>
        </>
    );
}

export default Input;
