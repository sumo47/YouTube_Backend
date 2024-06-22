import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.js'
import videoRoutes from './routes/video.js'
import cors from 'cors'
import bodyParser from 'body-parser'


import path from 'path'

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.use(bodyParser.json()) //app.use(express.json())
app.use('/uploads', express.static(path.join('uploads')))
app.get('/', (req, res) => {
    res.send("Hello World")
})
app.get('/sumo', (req, res) => {
    res.send("Hello sumit")
})

app.use('/user', userRoutes)
app.use('/video', videoRoutes)

const PORT = 4000 || process.env.PORT
const DB_URL = process.env.DB_URL

app.listen(PORT, () => {
    console.log(`✔️  server running on ${PORT}`)
})

mongoose.connect(DB_URL)
    .then(() => { console.log('✔️  connected to DB 😊 ') })
    .catch((error) => { console.log(error) })
