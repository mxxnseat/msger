import {connect} from "mongoose";

export default ()=>connect("mongodb://localhost:27017/messanger",{ useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    try{
        console.log("success connect to db");
    }catch(e){
        console.log(e);
    }
});