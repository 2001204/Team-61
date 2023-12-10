import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import bcrypt from "bcryptjs";
import { User } from './Go-fit.js';
import { DELETE_SUCCESS, ERROR_MESSAGE, USER_NOT_FOUND, UPDATE_SUCCESS } from './constants.js'
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';


const app = express();
app.use(cors());


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



//api for insert user data (sign up )
app.post("/User", async (request, response) => {
    try {
        const reqData = request.body;
        reqData['password'] = bcrypt.hashSync(reqData.password, 10);
        reqData['confirmpassword'] = bcrypt.hashSync(reqData.confirmpassword, 10);
        const userDetails = new User(reqData);
        await userDetails.save();
        response.send({ message: "User Inserted" });
    } catch (error) {
        console.error(error);
        response.status(500).send({ message: "Something Went wrong" });
    }
});



// login API(it check given crediential from database compare and do login)
app.post("/User/login", async (request, response) => {
    try {
        const user = await User.findOne({ email: request.body.email });

        if (user) {
            if (bcrypt.compareSync(request.body.password, user.password))
             {
                                // Generate and send a token (uncomment if needed)
                const token=jwt.sign({email:user.email},"dipak123");
                response.status(StatusCodes.OK).send({ message: "Login successful", token: token });

                // response.status(StatusCodes.OK).send({ message: "Login successful" });
            }
       else {
            response.status(StatusCodes.BAD_REQUEST).send({ message: "Invalid email or password" });
        }
    } else {
        response.status(StatusCodes.BAD_REQUEST).send({ message: "Invalid email or password........" });
    }
} catch (error) {
    console.error(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Something went wrong" });
}
});



//  //api for update user details
app.put("/User/:email", async (request, response) => {
    try {
        const { email } = request.params;
        const updatedUserData = request.body;

        // Update the user data, including hashing the password if provided
        if (updatedUserData.password) {
            updatedUserData.password = bcrypt.hashSync(updatedUserData.password, 10);
        }
        const result = await User.updateOne({ email }, updatedUserData);

        // if (result.nModified === 0) {
        //     return response.status(StatusCodes.NOT_FOUND).send({ message: STUDENT_NOT_FOUND });
        // }

        response.send({ message: UPDATE_SUCCESS });
    } catch (error) {
        console.error("Error updating user:", error);
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE });
    }
});


//api for delete user
app.delete("/User/:email", async (request, response) => {
    try {
        await User.deleteOne({ email: request.params.email });
        response.send({ message: DELETE_SUCCESS });
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE });
    }
});


//getting data of all the user
app.get("/User", async (request, response) => {
    try {
        const userDetails = await User.find();
        response.send({ userDetails: userDetails });
    } catch (error) {
        response.send({ message: "Something went wrong" });
    }
});




//getting data of one the User
app.get("/User/:email", async (request, response) => {
    try {
        const user = await User.findOne({ email: request.params.email });
        if (user == null) {
            response.status(StatusCodes.NOT_FOUND).send({ message: USER_NOT_FOUND });
        }

        else {
            response.send({ user: user });
        }
    } catch (error) {
        response.send({ message: "User Not Found" });
        console.log("User not findout");
        //response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});


//Server listen here on given port no
app.listen(4200, () => {
    console.log("Server has started on 4200");
    connectDb();
});









