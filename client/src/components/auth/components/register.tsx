import { FC, useState } from "react";
import { Link } from 'react-router-dom';

import Input from "./input";

import {IRegisterFields} from "../../../types/fields";

const Register: FC = () => {
    const [fields, setFields] = useState<IRegisterFields>({
        username: '',
        password: '',
        confirm_password: ''
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
            <Input placeholder="confirm password" type="password" field="confirm_password" cb={inputHandler} value={fields.confirm_password} />


            <div className="d-flex align-items-center w-100">
                <span className="authform__type">
                    <Link to="/login">login</Link>
                </span>
                <button className="btn">Register</button>
            </div>
        </>
    );
}

export default Register;
