import {model, Schema} from "mongoose";

const MessageSchema = new Schema({
    user_id: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    message: String,
    time: Date,
    channel_id:{
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Channel"
    },
    files: [
        {
            type: Schema.Types.ObjectId,
            ref: "File"
        } 
    ]
});


export default model("Message", MessageSchema)