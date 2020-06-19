const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Geo Location Schema //
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
})

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
    },
    geometry: GeoSchema
}, {
    timestamps: true
    // add in location //
})

const Pokemon = mongoose.model('pokemon', PokemonSchema)

module.exports = Pokemon