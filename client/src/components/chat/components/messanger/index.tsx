import { FC} from "react";

//components
import Form from "./form";
import MessageList from "./messageList";
import MessangerInfo from "./messangerInfo";

const Messanger: FC = ()=>{
    return (
        <>
            <div className="messanger d-flex flex-column justify-content-between col-md-9">
                <MessangerInfo />
                <MessageList />
                <Form />
            </div>
        </>
    );
}


export default Messanger;