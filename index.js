import express from 'express'
import { config } from 'dotenv';
import dbConnection from './connection/dbConnection.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes/routes.js';

config({path:"./.env"})
const app=express();
const port=process.env.PORT
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cookieParser());

app.use(cors({
    origin:process.env.FRONTEND_URL ||'http://localhost:5173',
    methods:['GET','POST','PATCH','DELETE'],
    credentials:true
}))
app.options('*',cors());

app.use('/api', routes);

dbConnection();

try{
    app.listen(process.env.PORT, () => {
        console.log(`Server running on http://localhost:${port}`);
      });
}catch(err){
    console.log(err)
}