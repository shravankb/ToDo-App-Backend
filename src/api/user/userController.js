const userServices = require('./userServices');

 signIn = async (req,res,next)=>{
 //token validation
 try {
     let userData;
     userData = await userServices.signIn(req.body)
     res.send(userData)
 } catch (error) {
     res.status(400).send({
         errorMessage: error.message,
         errorName: error.name
     })
 }
}

module.exports= {signIn}