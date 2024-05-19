import {MongoClient} from "mongodb";
import {cars} from "../data/data";

// Connection URL and Database Name
const url = 'mongodb://localhost:27017';
const dbName = 'university'; // Replace with your actual database name

async function insertCars() {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log('Connected correctly to server');

        const db = client.db(dbName);
        const collection = db.collection('Cars');

        const result = await collection.insertMany(cars);
        console.log(`${result.insertedCount} cars were inserted`);

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

