
const userModel = require('./userModel');

createUser = async(userInfo)=>{
try {
   return  await  userModel.create(userInfo) 
} catch (error) {
    throw error
}
}

module.exports ={ createUser}