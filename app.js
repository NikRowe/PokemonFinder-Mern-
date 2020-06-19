const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
let path = require('path');

// Import Routes //
const routes = require('./routes/indexRouter')
const pokemonRouter = require('./routes/pokemonRouter')

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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// How we use the routes //
app.use('/', routes)
app.use('/pokemon', pokemonRouter)

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