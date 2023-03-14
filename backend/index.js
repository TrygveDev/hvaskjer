const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const db = "mongodb+srv://trygvedev:lJBkBrWmIhqUd1IZ@cluster0.juec4ve.mongodb.net/activities";
const port = 5001;

mongoose.set("strictQuery", false);
mongoose.connect(db, {});

const activitySchema = new mongoose.Schema({
    type: String,
    title: String,
    img: String,
    date: String,
    desc: String,
    author: String,
    createdAt: { type: Date, expires: 60 * 60 * 12 },
});


const activityData = mongoose.model("activityData", activitySchema);
app.use(bodyParser.json());

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

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});