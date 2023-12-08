import express from 'express';
import mongoose from 'mongoose';
import { User } from './Go-fit.js';

const app = express();

app.use(express.json());   //process our request body (parse the JSON object into server)

// The app.use(express.json()) middleware is used in a Node.js application with the Express framework to parse incoming requests with JSON payloads. When a client sends data to the server with a Content-Type: application/json header, this middleware automatically parses the JSON data and makes it available in the request.body property.
const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Go-fit');    //, { useNewUrlParser: true, useUnifiedTopology: true }
        console.log("Database connection created!");
    } catch (error) {
        console.error(error);
    }
}

app.post("/UserDetail", async (req, res) => {
    try {
        const reqData = req.body;
        const userDetails = new User(reqData);
        await userDetails.save();
        res.send({ message: "User Inserted" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Something Went wrong" });
    }
});

app.listen(4100, () => {
    console.log("Server has started on 4100");
    connectDb();
});
