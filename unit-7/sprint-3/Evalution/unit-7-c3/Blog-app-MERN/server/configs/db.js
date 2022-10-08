const mongoose = require('mongoose');

// const connection = mongoose.connect('mongodb://localhost:27017/Blog-app')
// module.exports = connection;


const ConnectToDatabase=()=>{
    const connectLink = 'mongodb://127.0.0.1:27017/Blog-app';

    return new Promise((resolve, reject)=>{
        mongoose.connect(connectLink)
        .then(()=>{
            console.log("Database Connected");
            resolve();
        })
        .catch((err)=>{
            console.log("Eror occured", err);
            reject(err);
        })
    })

}

module.exports = ConnectToDatabase;