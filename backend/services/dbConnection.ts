import * as mysql from "mysql2";

const dbHost = process.env.DB_HOST || 'localhost'

function connectToDB() {
    const db = mysql.createConnection({
        host: dbHost,
        user: 'root',
        password: 'admin111',
        database: 'laba1',
    })
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err)
            return;
        }
        console.log('Connected to the MySQL database successfully');
    })
    return db;
}

export default connectToDB;