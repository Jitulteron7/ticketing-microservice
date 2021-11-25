import mongoose from "mongoose";
// an interface that describes the properties
// that are required to create a new user
interface UserAttrs{
    email:string;
    password:string;
}

//an interface that describe the properties of 
// user model
// <UserDoc> doubt 
 interface UserModel extends mongoose.Model<UserDoc>{
    build(attrs:UserAttrs):UserDoc
 }
 // an interface that describes  the properties 
 // that a user Document has
 interface UserDoc extends mongoose.Document{
    email:string;
    password:string;
    // createdAt:string;
    // updatedAt:string
 }

const userSchema =new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.statics.build=(artts:UserAttrs)=>{
    return new User(artts)
}
// <UserDoc,UserModel> doubt 
const User =mongoose.model<UserDoc,UserModel>("User",userSchema)

export {User}