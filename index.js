import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import {config} from "dotenv";
import router from './routes/index.js';
import ErrorHandlingMiddleware from "./middlewares/ErrorHandlingMiddleware.js";
import fileUpload from "express-fileupload";
import path from "path"

const app = express();

config();
console.log(path.resolve('__dirname', 'static'))
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve('static')))
app.use(fileUpload({}))
app.use('/api', router)

//Обработка ошибок, последний middleware
app.use(ErrorHandlingMiddleware)

mongoose.connect('mongodb://localhost:27017/Shop');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server run on ${PORT} port`)
})