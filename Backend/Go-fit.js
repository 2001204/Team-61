import mongoose, { Schema } from "mongoose";

const GofitSchema=new Schema({
    name:String,
    email:String,
    password:String,
    gender:String  
});

export const User=mongoose.model("UserDetail",GofitSchema);
//UserDetail-> new collection name as (userdetails)    User-> class name    and need to import in index.js file
//it create (UserDetails) collection  on basic of GofitSchema  and store that collection into (User) class

