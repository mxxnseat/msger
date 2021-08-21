import { FC } from "react";

const MessangerInfo: FC = () => {
    return (
        <>
           <div className="messanger__header d-flex align-items-center">
               <div className="messanger__room-name col-6">#general</div>
               <div className="messanger__room-members col-2">1,093</div>
               <div className="messanger__room-search col-4">
                   <input type="text" placeholder="Search..." />
               </div>
           </div>
        </>
    );
}


export default MessangerInfo;