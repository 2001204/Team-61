import express from 'express';
import mongoose from 'mongoose';
import { User } from './Go-fit.js';
import { DELETE_SUCCESS,ERROR_MESSAGE, STUDENT_NOT_FOUND, UPDATE_SUCCESS } from './constants.js';

const app = express();

app.use(express.json());   //process our request body (parse the JSON object into server)

// The app.use(express.json()) middleware is used in a Node.js application with the Express framework to parse incoming requests with JSON payloads. When a client sends data to the server with a Content-Type: application/json header, this middleware automatically parses the JSON data and makes it available in the request.body property.
const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Go-fit');   //, { useNewUrlParser: true, useUnifiedTopology: true }
        console.log("Database connection created!");
    } catch (error) {
        console.error(error);
    }
}

//api insert user data (sign up )
app.post("/User", async (request, response) => {
    try {
        const reqData = request.body;
        const userDetails = new User(reqData);
        await userDetails.save();
        response.send({ message: "User Inserted" });
    } catch (error) {
        console.error(error);
        response.status(500).send({ message: "Something Went wrong" });
    }
});


//getting data of all the user
app.get("/User",async(request,response)=>{
    try{
        const userDetails=await User.find();
        response.send({userDetails:userDetails});
    }catch(error){
        response.send({message:"Something went wrong"});
    }
});


//getting data of one the User
app.get("/User/:email",async(request,response)=>{
    try {
       const user=await User.findOne({email:request.params.email});
       if (user==null) {
        response.status(StatusCodes.NOT_FOUND).send({message:STUDENT_NOT_FOUND});
       }
       else{
         response.send({user:user});
       }
       
    } catch (error) {
        response.send({message:"User Not Found"});
       // console.log("User not findout");
       //response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});


//api for delete user
app.delete("/User/:email",async(request,response)=>{
    try {
        await User.deleteOne({email:request.params.email});
        response.send({message:DELETE_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});


//api for update user details
app.put("/User/:email",async(request,response)=>{
    try {
        await User.updateOne({email:request.params.email},request.body);     // Find the user by email
         if (!User) {
        return response.status(StatusCodes.NOT_FOUND).send({ message: STUDENT_NOT_FOUND });
      }
      // Update the user data
      User.set(request.body);
      await User.save();
      response.send({ message: UPDATE_SUCCESS });
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});



//Server listen here on given port no
app.listen(4200, () => {
    console.log("Server has started on 4200");
    connectDb();
});
