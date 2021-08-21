import { FC } from "react";

//components
import MessageItem from "./messageItem";

const List: FC = () => {
    return (
        <>
            <div className="messanger__list">

                <div className="separate-day">
                    Today
                </div>

                <MessageItem />
            </div>
        </>
    );
}


export default List;