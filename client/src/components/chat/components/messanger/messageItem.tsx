import {FC} from "react";


const MessageItem: FC = ()=>{
    return (
        <div className="messanger__message d-flex flex-wrap ">
                    <div className="messanger__message__photo col-2">
                        <img src={require('../../../../assets/img/photo.jpg').default} alt="Avatar" />
                    </div>
                    <div className="messanger__message__content col-10 d-flex flex-wrap">
                        <div className="col-12 d-flex">
                            <div className="messanger__message__name">Ramon Bateman</div>
                            <div className="messanger__message__time">11:59 AM</div>
                        </div>
                        <div className="messanger__message__text col-12">
                            <span className="messanger__message__push-message">@aa_da</span> What's the reason for the van? Saving money or just like to get outside?
                            If you've got a stable source of income you could always do some short term Airbnbs +
                            buy a truck/topper, build a platform in the back. That way you can always convert it back
                            to a truck and sleep in an apartment if you want.
                        </div>
                    </div>
                </div>
    );
}


export default MessageItem;