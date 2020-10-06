 const { response } = require('express');
const userServices = require('./userServices');

 signIn = async (req,res,next)=>{
 //token validation
 try {
     let userData;
     userData = await userServices.signIn(req.body)
     res.send(userData)
 } catch (error) {
     
 }
}

module.exports= {signIn}