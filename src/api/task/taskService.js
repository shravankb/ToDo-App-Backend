const taskDal = require('./taskDal');

addTask = async(body)=>{
    try {
       return await taskDal.createTask(body)
    } catch (error) {
        throw error;
    }
}

module.exports= {addTask}