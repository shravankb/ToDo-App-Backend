const taskService = require('./taskService');
const joi =require('joi');
const validationSchema= require('./taskValidation')

 addTask = async (req,res,next)=>{
 try {
     let taskData;
     await joi.validate(req.body, validationSchema.taskValidation)
     taskData = await taskService.addTask(req.body)
     res.send(taskData)
 } catch (error) {
     res.status(400).send({
         errorMessage: error.message,
         errorName: error.name
     })
 }
}

getTasks = async(req,res,next) =>{

    try {
        await joi.validate(req.params , validationSchema.userIdValidation)
        res.send(req.params)
    } catch (error) {
        res.status(400).send(error)
    }

}

module.exports= {addTask,getTasks}