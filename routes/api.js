const express = require('express')
const Pokemon = require('../models/pokemon')
const bodyParser = require('body-parser')

const router = express.Router()

router.use(bodyParser.json())

// GET list of pokemon from the db
router.get('/pokemon', (req, res, next) => {
    Pokemon.find()
        .then(pokemon => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(pokemon);
        })
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
    // Looks in Pokemon Schema and uses Mongoose method findByIdAndRemove with mongoose obj property _id set to id of the client request. then use .then method to send removed pokemon obj to server response //
    Pokemon.findByIdAndRemove({ _id: req.params.id })
        .then((pokemon) => {
            res.send(pokemon)
        })
        .catch(next)
})

module.exports = router