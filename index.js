const express = require('express')

// Set up EXPRESS app //
const app = express ()

app.get('/api', (req, res) => {
    console.log('GET Request')
    res.send({ name: 'Pikachu'})
})

// Listen for requests //
app.listen(process.env.port || 4000, () =>{
    console.log('now listening for requests')
})