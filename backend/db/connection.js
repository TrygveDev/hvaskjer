const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://trygvedev:lJBkBrWmIhqUd1IZ@cluster0.juec4ve.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

function connectPosts() {
    return new Promise((resolve, reject) => {
        client.connect(err => {
            if (err) reject(err);
            const collection = client.db("hvaskjer").collection("posts");
            resolve(collection)
        });
    })
}

function connectUsers() {
    return new Promise((resolve, reject) => {
        client.connect(err => {
            if (err) reject(err);
            const collection = client.db("hvaskjer").collection("users");
            resolve(collection)
        });
    })
}

function closeConnection() {
    client.close();
}

export { connectPosts, connectUsers, closeConnection }

