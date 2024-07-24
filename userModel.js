import mongoose from "mongoose";
const { Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    surname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        ariaRequired:true,
    }
})

const User = mongoose.model('User', UserSchema,'User');
export default User