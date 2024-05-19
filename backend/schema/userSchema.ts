import mongoose from "mongoose";

const UserSchema = () => {
    const userSchema = new mongoose.Schema({
        name: {type: String, required: true},
        age: {type: Number, required: true},
    })
    return mongoose.model('user', userSchema)
};

const User = UserSchema()

export default User;