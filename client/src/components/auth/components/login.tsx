import { FC, useState } from "react";
import { Link } from 'react-router-dom';

import Input from "./input";

import {ILoginFields} from "../../../types/fields";



const Login: FC = () => {
    const [fields, setFields] = useState<ILoginFields>({
        username: '',
        password: ''
    });

    const inputHandler = (field: string, value: string)=>{
        setFields({
            ...fields,
            [field]: value
        })
    }



    return (
        <>
            <Input placeholder="username" type="text" field="username" cb={inputHandler} value={fields.username} />
            <Input placeholder="password" type="password" field="password" cb={inputHandler} value={fields.password} />

            <div className="d-flex align-items-center w-100">
                <span className="authform__type">
                    <Link to="/register">register</Link>
                </span>
                <button className="btn">Login</button>
            </div>
        </>
    );
}

export default Login;
