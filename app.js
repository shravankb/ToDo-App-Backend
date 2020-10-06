const express =require('express');
const app=express();
const morgan= require('morgan');
//const dbConnect= require('./dbConfig/dbConnect')
const bodyParser= require('body-parser');
const userRoute=require('./src/api/user/userRoute');
const url='mongodb://localhost:27017/dummyDB';

app.use(morgan('dev'));
app.use(bodyParser.json());
//dbConnect.connectToDatabase(url);
app.use('/user',userRoute)


app.listen(3031,()=>
{
    console.log('server is up')
})