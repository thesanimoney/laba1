import express from "express";
import getAllBooks from "../controllers/getAllBooks";
import connectToDB from "../services/dbConnection";
import addBook from "../controllers/addBook";

const router = express.Router();
const db = connectToDB()

router.get('/api/books', (req, res) => {
    return getAllBooks(req, res, db);
});

router.post('/api/books', (req, res) => {
    addBook(req, res, db);
})

router.delete('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id!)
    if (!id) return res.status(400).send('Id must be a number');

    const query = `DELETE FROM books WHERE id = ?`

    db.query(query, [id], (err, results) => {
        if (err) {
            res.status(500).send(err.message)
        }
        return res.status(200).send('Successfully deleted book' + JSON.stringify(results));
    })
})

export default router;

