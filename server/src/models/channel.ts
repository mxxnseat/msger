import {model, Schema} from "mongoose";

const ChannelSchema = new Schema({
    name: String,
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    isPrivate: Boolean
});


export default model("Channel", ChannelSchema);