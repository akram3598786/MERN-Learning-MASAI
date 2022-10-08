import mongoose from "mongoose"


const UserSchema = new mongoose.Schema(

    {
        name: String,
        email: String,
        profile : String,
        social_profiles: {
            linkedin: String,
            facebook: String,
            twitter: String,
            github: String,
            instagram: String
        },
        Addresses: 
            {
                houseNo: Number,
                city: String,
                state: String,
                pinCode: Number
            },

        // Normalized approach - passes a model reference by (ref)
      /*  Blog_id: {
          type : mongoose.Types.ObjectId,
          ref : "Blog"
         } */
    }
);

const userModel = mongoose.model("User", UserSchema, "users");

export default userModel;