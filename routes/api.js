const express = require('express')
const router = express.Router()
const Pokemon = require('../models/pokemon')

// GET list of pokemon from the db
router.get('/pokemon', (req, res, next) => {
    res.send({ type: 'GET' })
})
// POST(add) a new pokemon to the db
router.post('/pokemon', (req, res, next) => {
    Pokemon.create(req.body) // mongoose method returning promise to get body data and save to db with the Pokemon Schema
        .then((pokemon) => {
            res.send(pokemon)
        })
        .catch(next)
})
// PUT(update) a pokemon in the db
router.put('/pokemon/:id', (req, res, next) => {
    res.send({ type: 'PUT' })
})
// DELETE pokemon from the db
router.delete('/pokemon/:id', (req, res, next) => {
    res.send({ type: 'DELETE' })
})

module.exports = router