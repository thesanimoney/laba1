import express from 'express';
import router from './routes/books';
import cors from 'cors'
import {userRouter} from "./routes/users";
import connectToMongo from "./services/dbConnectionMongo";

const app = express()
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json())
app.use(router)
app.use(userRouter)

// noinspection JSIgnoredPromiseFromCall
connectToMongo()

app.listen(port, () => {
    console.log('Listening on port...', port)
})


