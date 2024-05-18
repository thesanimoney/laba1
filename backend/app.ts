import express from 'express';
import router from './routes/books';
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000
app.use(cors());

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log('Listening on port...', port)
})

export const num = 1
