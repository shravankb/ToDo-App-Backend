
const userModel = require('./userModel');

createUser = async(userInfo)=>{
try {
   return  await  userModel.create(userInfo) 
} catch (error) {
    throw error
}
}

countUsers = async(query) =>{
    try {
        return await userModel.countDocuments({email: query.email})
    } catch (error) {
        throw error

    }
}

module.exports ={ createUser, countUsers}