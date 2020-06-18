const express = require('express')
const routes = require('./routes/api')

// Set up EXPRESS app //
const app = express ()

// How we use the routes //
app.use('/api', routes)

// Listen for requests //
app.listen(process.env.port || 4000, () =>{
    console.log('now listening for requests')
})