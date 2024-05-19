import mongoose from "mongoose";

export default async function connectToMongo() {
    const uri = "mongodb://localhost:27017/university";
    try {
        await mongoose.connect(uri);
        return console.log('Mongodb connected successfully...');
    } catch (err) {
        return console.log("Ooops.. error " + err);
    }
}


