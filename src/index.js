import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.js'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
dotenv.config()
app.use(cors())
app.use(bodyParser.json()) //app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World")
})
app.get('/sumo', (req, res) => {
    res.send("Hello sumit")
})



app.use('/user', userRoutes)

const PORT = 4000 || process.env.PORT
const DB_URL = process.env.DB_URL

app.listen(PORT, () => {
    console.log(`✔️  server running on ${PORT}`)
})

mongoose.connect(DB_URL)
    .then(() => { console.log('✔️  connected to DB 😊 ') })
    .catch((error) => { console.log(error) })
