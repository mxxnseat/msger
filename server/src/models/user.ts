import {model, Schema} from "mongoose";

const UserSchema = new Schema({
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    tokens: {
        required: true,
        type: Object,
        access: {
            type: String
        },
        refresh: {
            type: String
        }
    },
    channels: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Channel'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    avatar: {
        type: Schema.Types.ObjectId,
        ref: "File"
    }
});


export default model("User", UserSchema)