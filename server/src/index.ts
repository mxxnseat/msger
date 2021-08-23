import dotenv from "dotenv";
dotenv.config();


import express, {Application, Request, Response} from "express";
import bodyParser from "body-parser";
const app: Application = express();
const PORT: number | string = process.env.PORT || 5000;
import connection from "./connection";

//routers
import auth from "./routers/auth";

app.use(bodyParser());
app.use("/auth", auth);


app.listen(PORT, ()=>{
    try{
        console.log(`We are started on ${PORT} port`);

        connection();
    }catch(e){
        console.log(e);
    }
})