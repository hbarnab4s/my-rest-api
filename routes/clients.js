const express = require('express')
const router = express.Router()
const Client = require('../models/client')

module.exports = router

//Getting all
router.get('/', async (req, res) => {
    try {
        const clients = await Client.find()
        res.json(clients)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
})
//Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
//Cerating one
router.post('/', async (req, res) => {
    const client = new Client({
        name: req.body.name,
        email: req.body.email
    })
    try {
        const newClient = await client.save()
        res.status(201).json(newClient)
    } catch(error) {
        res.status(400).json({ mesasge: error.mesasge })
    }
})
//Updating one
router.patch('/:id', (req, res) => {
    
})
//Deleting one
router.delete('/:id', (req, res) => {
    
})