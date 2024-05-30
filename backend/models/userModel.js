import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    lastName: {
        type: String,
        default: 'last name'
    },
    location: {
        type: String,
        default: 'Dar es salaam'
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

// using instance method approach that remove password when we return user's details from get current users' controller and come up with any name but i chose toJSON
userSchema.methods.toJSON = function () {
    // transform user into old js object
    let obj = this.toObject()
    delete obj.password
    return obj
}
export default mongoose.model('User', userSchema)