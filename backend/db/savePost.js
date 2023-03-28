import { postData } from "./schemas.js";

export default function savePost(data) {
    return new promise(async (resolve, reject) => {

        const entry = new postData({
            type: data.type,
            title: data.title,
            img: data.img,
            date: data.date,
            desc: data.desc,
            author: data.author,
        });


        const result = await entry.save();

        return resolve(result)
    })
}