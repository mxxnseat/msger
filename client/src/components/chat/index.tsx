import { FC } from "react";

import "./scss/index.scss";

//components
import Messanger from "./components/messanger";
import Sidebar from "./components/sidebar";

const Chat: FC = () => {
    return (
        <div className="row">
            <Sidebar />
            <Messanger />
        </div>
    );
}


export default Chat;