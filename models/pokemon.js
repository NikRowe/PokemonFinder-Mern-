const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create pokemon Schema & model //
const PokemonSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
    },
    type: {
        type: String
    }, 
    nearBy: {
        type: Boolean,
        default: false
    }
    // add in location //
})

const Pokemon = mongoose.model('pokemon', PokemonSchema)

module.exports = Pokemon