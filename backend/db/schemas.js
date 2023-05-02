import { Schema, model } from "mongoose";

const postSchema = new Schema({
    type: String,
    title: String,
    img: String,
    date: String,
    desc: String,
    author: String,
    createdAt: { type: Date, expires: 60 * 60 * 12 },
});
const postData = model("postData", postSchema);



const userSchema = new Schema({
    username: String,
    password: String,
    auth: String,
    createdAt: { type: Date, expires: 60 * 60 * 12 },
});
const userData = model("userData", userSchema);



export { postData, userData };