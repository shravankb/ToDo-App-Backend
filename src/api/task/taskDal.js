const taskModel = require('./taskModel');

createTask = async(taskInfo)=>{
try {
   return  await  taskModel.create(taskInfo) 
} catch (error) {
    throw error
}
}

// countUsers = async(query) =>{
//     try {
//         return await userModel.countDocuments({email: query.email})
//     } catch (error) {
//         throw error

//     }
// }

module.exports ={ createTask}