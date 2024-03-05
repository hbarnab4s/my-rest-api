require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

mongoose.connect(process.env.DATABASE_URL)
.then(() => {
    app.listen(port, () => {
        console.log(`This app is listening on port ${port}`)
    })
    console.log('Connected to the database')}
).catch((error) => {
    console.log(error)
})
//const db = mongoose.connection

app.use(express.json())

const clientsRouter = require('./routes/clients')
app.use('/clients', clientsRouter)