import mongoose  from "mongoose";

const ConnectToDatabase=()=>{
    const connectLink = 'mongodb://127.0.0.1:27017/mongo-learning';

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

export default ConnectToDatabase;