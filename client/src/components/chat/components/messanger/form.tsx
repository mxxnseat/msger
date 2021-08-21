import { FC } from "react";

const Form: FC = () => {
    return (
        <>
            <div className="messanger__form row gx-0">
                <div className="col-2 justify-content-end align-self-start d-flex messanger__message-options">
                    <div className="messanger__attach">
                        <img src={require("../../../../assets/i/paper_clip.svg").default} alt="Attach file" />
                    </div>
                    <div className="messanger__voice">
                        <img src={require("../../../../assets/i/microphone.svg").default} alt="Voice message" />
                    </div>
                </div>
                <textarea className="messanger__textarea col-10" placeholder="Message in #general"></textarea>
            </div>
        </>
    );
}


export default Form;