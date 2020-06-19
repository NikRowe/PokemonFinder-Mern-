const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Import Routes //
const routes = require('./routes/api')

// Set up EXPRESS app //
const app = express()

// Connect to MongoDB //
mongoose.connect('mongodb://localhost/pokemongo', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.Promise = global.Promise

// BP parses the client body and attaches it to the req param //
app.use(bodyParser.json())

// How we use the routes //
app.use('/api', routes)

// Error handling middleware //
app.use(( err, req, res, next ) => {
    // console.log(err)
    res.status(422)
    res.send({error: err.message})
})

// Listen for requests //
app.listen(process.env.port || 4000, () => {
    console.log('now listening for requests')
})