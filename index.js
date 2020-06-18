const express = require('express')
const bodyParser = require('body-parser')

// Import Routes //
const routes = require('./routes/api')

// Set up EXPRESS app //
const app = express ()

// BP parses the client body and attaches it to the req param //
app.use(bodyParser.json())

// How we use the routes //
app.use('/api', routes)

// Listen for requests //
app.listen(process.env.port || 4000, () =>{
    console.log('now listening for requests')
})