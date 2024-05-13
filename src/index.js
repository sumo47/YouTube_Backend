import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.get('/', (req, res) => {
    res.send("Hello World")
})

const PORT = 4000 || process.env.PORT
const DB_URL = process.env.DB_URL

app.listen(PORT, ()=>{
    console.log(`✔️  server running on ${PORT}`) 
})

mongoose.connect(DB_URL)
    .then(() => { console.log('✔️  connected to db ') })
    .catch((error) => { console.log(error) })
