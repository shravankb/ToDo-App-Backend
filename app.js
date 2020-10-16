const express =require('express');
const app=express();
const morgan= require('morgan');
const dbConnect= require('./src/config/dbConnect')
const bodyParser= require('body-parser');
const userRoute=require('./src/api/user/userRoute');
const apiKey = require('./src/keys/dbKeys');
const taskRoute= require('./src/api/task/taskRoute');
app.use(morgan('dev'));
app.use(bodyParser.json());
dbConnect.connectToDb(apiKey.DB_URL);

app.use('/user',userRoute)
app.use('/tasks', taskRoute)

app.listen(3031,()=>
{
    console.log('server is up')
})