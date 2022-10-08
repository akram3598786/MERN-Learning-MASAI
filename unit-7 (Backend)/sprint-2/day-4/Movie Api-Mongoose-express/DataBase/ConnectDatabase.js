

const mongoose = require('mongoose';

async function connectDatabbase() {
    const connection = 'mongodb://127.0.0.1:27017/mongo-learning'

    return new Promise((resolve, reject) => {
        mongoose.connect(connection)
        .then(() => {
            console.log('Connected to database');
            resolve();
        })
        .catch((err) => {
            console.log('Could not connect to database')
            reject(err);
        })
    })
}

module.exports=connectDatabbase;
