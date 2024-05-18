import {Request, Response} from "express";
import {Connection, QueryError, QueryResult} from "mysql2";


export default function getAllBooks(req: Request<{}>, res: Response, db: Connection) {
    const query = 'SELECT * FROM books'

    db.query(query, (err: QueryError, results: QueryResult) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send(err);
        }
        res.status(200).json(results);
    });
}