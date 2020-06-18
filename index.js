const express = require('express')

// Set up EXPRESS app //
const app = express ()


// Listen for requests //
app.listen(process.env.port || 4000, () =>{
    console.log('now listening for requests')
})