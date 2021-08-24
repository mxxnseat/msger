import { FC } from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from "./components/login";
import Register from "./components/register";

import "./scss/index.scss";

const Auth: FC = () => {
    return (
        <BrowserRouter>
            <div className="authform-wrapper d-flex align-items-center justify-content-center">
                <div className="authform d-flex flex-column align-items-center">
                    <Switch>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route path="/">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Auth;