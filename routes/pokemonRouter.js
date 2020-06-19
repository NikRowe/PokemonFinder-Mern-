const express = require('express')
const Pokemon = require('../models/pokemon')
const bodyParser = require('body-parser')

const pokemonRouter = express.Router()

pokemonRouter.use(bodyParser.json())

pokemonRouter.route('/')
    // GET list of all pokemon from the db
    .get((req, res, next) => {
        Pokemon.find()
            .then(pokemon => {
                res.status(200);
                res.setHeader('Content-Type', 'application/json');
                res.json(pokemon);
            })
    })

    // POST(add) a new pokemon to the db
    .post((req, res, next) => {
        Pokemon.create(req.body) // mongoose method returning promise to get body data and save to db with the Pokemon Schema
            .then((pokemon) => {
                res.status(200);
                res.send(pokemon)
            })
            .catch(next)
    })

    // DELETE all pokemon !! //
    .delete((req, res, next) => {
        // Looks in Pokemon Schema and uses Mongoose method findByIdAndRemove with mongoose obj property _id set to id of the client request. then use .then method to send removed pokemon obj to server response //
        Pokemon.deleteMany()
            .then((pokemon) => {
                res.status(200);
                res.send(pokemon)
            })
            .catch(next)
    })

pokemonRouter.route('/near_me')
    .get((req, res, next) => {
        Pokemon.aggregate().near({
            near: {
                'type': 'Point',
                'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
            },
            maxDistance: 1000000,
            spherical: true,
            distanceField: "dist.calculated"
        })
            .then((pokemon) => {
                res.send(pokemon)
            })
            .catch(next)
    })

// SPECIFIC POKEMON //
pokemonRouter.route('/:id')
    // GET specific pokemon from the db
    .get((req, res, next) => {
        Pokemon.findById(req.params.id)
            .then(pokemon => {
                res.status(200);
                res.setHeader('Content-Type', 'application/json');
                res.json(pokemon);
            })
    })

    // PUT(update) a pokemon in the db
    .put((req, res, next) => {
        // find Pokemon by id and update with request body then use .then followed by Pokemon.findOne method find the updated pokemon in the db and send back to client
        Pokemon.findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(() => {
                Pokemon.findOne({ _id: req.params.id })
                    .then((pokemon) => {
                        res.status(200);
                        res.send(pokemon)
                    })
            })
            .catch(next)
    })

    // DELETE pokemon from the db
    .delete((req, res, next) => {
        // Looks in Pokemon Schema and uses Mongoose method findByIdAndRemove with mongoose obj property _id set to id of the client request. then use .then method to send removed pokemon obj to server response //
        Pokemon.findByIdAndRemove({ _id: req.params.id })
            .then((pokemon) => {
                res.status(200)
                res.send(pokemon)
            })
            .catch(next)
    })





module.exports = pokemonRouter