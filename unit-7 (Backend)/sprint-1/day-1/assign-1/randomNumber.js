
const { timeStamp } = require("console");
const crypto = require("crypto");

const randomNumber=(numLength)=>{

    let randomNum = "";
    for(let i=0;i<numLength;i++){  // OTP of length 6
        let random = crypto.randomInt(0,9);
        randomNum+=random;
    }
    console.log("Random number is =",randomNum); 
}

module.exports = randomNumber;