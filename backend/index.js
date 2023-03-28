import express from "express";
import cors from "cors";
import { set, connect } from "mongoose";
import { postData } from "./db/schemas.js";
import { createUser } from "./db/createUser.js";
import { authUser } from "./db/authUser.js";
import savePost from "./db/savePost.js";

const port = 5001;
const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
set("strictQuery", false);
connect("mongodb+srv://trygvedev:lJBkBrWmIhqUd1IZ@cluster0.juec4ve.mongodb.net/activities", {});


// Fetch posts from database
app.get("/fetchData", async (req, res) => {
    const result = await postData.find()
    res.json(result);
});


// Save post to database
app.post("/saveData", async (req, res) => {
    const data = req.body;

    savePost(data)
        .then((data) => {
            res.send(data)
        })
});


// Create user
app.post("/createUser", async (req, res) => {
    const data = req.body;

    createUser(data.username, data.password)
        .then((user) => {
            res.send(user)
        })
        .catch((err) => res.send(err))
});


// Login user
app.post("/loginUser", async (req, res) => {
    const data = req.body;
    console.log(data);

    authUser(data.username, data.password)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => res.send(err))
});


// Listen on port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});