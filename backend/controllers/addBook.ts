import validateBook from "../schema/validateBook";
import {Request, Response} from "express";
import {Connection} from "mysql2";

function addBook(req: Request, res: Response, db: Connection) {
    const {error, value} = validateBook(req.body);
    if (error) return res.status(400).send(error.details);

    const query = 'INSERT INTO books (`title`, `description`, `author`, `price_to_rent`, `genre`) VALUES (?)'
    const values = [value.title, value.description, value.author, value.price_to_rent, value.genre];

    db.query(query, [values], (err, data) => {
        if (err) return res.status(500).send(err.message)
        return res.status(200).send('Successfully added book');
    })
}

export default addBook;