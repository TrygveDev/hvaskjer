import express from "express";
import { set, connect, Schema, model } from "mongoose";
import cors from "cors";
import { signup, login } from "./salt.js";

const app = express();
app.use(express.json());
const db = "mongodb+srv://trygvedev:lJBkBrWmIhqUd1IZ@cluster0.juec4ve.mongodb.net/activities";
const port = 5001;

set("strictQuery", false);
connect(db, {});

const activitySchema = new Schema({
    type: String,
    title: String,
    img: String,
    date: String,
    desc: String,
    author: String,
    createdAt: { type: Date, expires: 60 * 60 * 12 },
});

const userSchema = new Schema({
    username: String,
    password: String,
    createdAt: { type: Date, expires: 60 * 60 * 12 },
});


const activityData = model("activityData", activitySchema);
export const userData = model("userData", userSchema);

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) {
            callback(null, true);
        } else {
            const allowedOrigins = ["http://localhost:3000"];
            const isAllowed = allowedOrigins.includes(origin);
            callback(isAllowed ? null : new Error("Origin not allowed"), isAllowed);
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));

app.post("/saveData", async (req, res) => {
    const data = req.body;

    const activityInfo = new activityData({
        type: data.type,
        title: data.title,
        img: data.img,
        date: data.date,
        desc: data.desc,
        author: data.author,
    });

    const result = await activityInfo.save();
    console.log(result);
});

app.get("/fetchData", async (req, res) => {
    const result = await activityData.find();
    res.json(result);
});

app.post("/createUser", async (req, res) => {
    const data = req.body;
    console.log(data);
    const checkUsername = await userData.find({ username: data.username })
    if (checkUsername) return console.log("Username already exists")
    const user = signup(data.username, data.password);

    const userSignup = new userData({
        username: user.username,
        password: user.password
    });

    const result = await userSignup.save();
    console.log(result);
});

app.post("/loginUser", async (req, res) => {
    const data = req.body;
    console.log(data);

    login(data.username, data.password)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => res.send(err))

});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});