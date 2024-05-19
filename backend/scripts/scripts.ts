// db.Cars.find({ "year": { "$gte": 1990 } }).sort({ "year": -1 }) 1)
// db.Cars.find({ "brand": "Audi", "color": "White" }) 2)
// db.Cars.find({ "price": { "$lt": 25000 } }).sort({ "price": 1 }).limit(3) 3)
// db.Cars.find({ "$or": [{ "color": "Black" }, { "brand": "Mercedes" }] }) 4)
// db.Cars.updateMany(
//     { "year": { "$lt": 1988 } },
//     { "$set": { "discount": 30 } }
// ) 5)
// db.Cars.find({ "brand": { "$ne": "BMW" } }) 6)
// db.Cars.aggregate([
//     { "$match": { "brand": "Volvo" } },
//     { "$group": {
//         "_id": null,
//         "totalPrice": { "$sum": "$price" },
//         "avgPrice": { "$avg": "$price" },
//         "minPrice": { "$min": "$price" },
//         "maxPrice": { "$max": "$price" }
//     }}
// ]) 7)
// { "color": { "$exists": true } } 12)
// { "brand": "BMW", "color": { "$exists": true } } 13)
// db.Cars.drop() 15)
// db.getSiblingDB("Products").dropDatabase() 16)







