
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name : {type : String, require:true},
        email : {type : String, require: true, unique: true},
        mobile : {type : Number},
        password : {type : String, require:true}
    },{
        versionKey : false,
        timestamps : true
    }
);

const UserModel = mongoose.model("User", UserSchema, "users");

const PostSchema = new mongoose.Schema(
{
    title : {type : String, require : true},
    description : {type : String},

}
);

module.exports = UserModel;