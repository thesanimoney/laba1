import mongoose from "mongoose";

const UserSchemaMongoDB = () => {
    const userSchema = new mongoose.Schema({
        name: {type: String, required: true},
        age: {type: Number, required: true},
    })
    return mongoose.model('user', userSchema)
};

const User = UserSchemaMongoDB()

export default User;