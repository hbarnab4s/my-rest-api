require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))

db.once('open', () => console.log('Connected to the database'))

app.listen(port, () => {
    console.log(`This app is listening on port ${port}`)
})