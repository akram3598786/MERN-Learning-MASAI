
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({ // Class
    name: {
        type: String,
        required: true, 
        minLength: 4, 
        maxLength: 40,
    },
    password: {
        type: String,
        select: false, 
    },
    email: String,
    github_id: String,
    about: String,
    dob: Date,
    image: String,
    verifiedEmail: {
        type: Boolean,
        default: false,
    },
    followerCount: {
        type: Number,
        default: 0,
    },
})

const userModel = mongoose.model('User', userSchema, 'users') // 'User' -> 'users'

export default userModel;