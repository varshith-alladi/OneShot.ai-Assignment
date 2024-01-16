import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Router from './routes/route.js'

const app = express();

dotenv.config();


app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
// app.use((req, res, next) => {
//     console.log(req.url)
//     next()
// })
app.use('/', Router);


const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT: ${PORT}`);
});

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);