const mongoose=require('mongoose');

const userSchema= mongoose.Schema({
    email:{
        type: String, 
        required:true,
        unique:true
    },
    name:{
        type: String,
        required:true
    }
});

const UserModel= mongoose.model("User",userSchema);

module.exports= UserModel;