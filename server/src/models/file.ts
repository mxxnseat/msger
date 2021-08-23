import {model, Schema} from "mongoose";

const FileSchema = new Schema({
    filename: String,
    mime_type: String
});


export default model("File", FileSchema)