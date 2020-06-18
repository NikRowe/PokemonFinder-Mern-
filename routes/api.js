const express = require('express')
const router = express.Router()

// GET list of pokemon from the db
router.get('/pokemon', (req, res) => {
    res.send({ type : 'GET'})
})
// POST(add) a new pokemon to the db
router.post('/pokemon', (req, res) => {
    console.log(req.body)
    res.send({ 
        type : 'POST',
        name: req.body.name,
        rank: req.body.type
    })
})
// PUT(update) a pokemon in the db
router.put('/pokemon/:id', (req, res) => {
    res.send({ type : 'PUT'})
})
// DELETE pokemon from the db
router.delete('/pokemon/:id', (req, res) => {
    res.send({ type : 'DELETE'})
})

module.exports = router