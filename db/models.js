const mongoose = require('./connection.js')

const SportsSchema = new mongoose.Schema({
    sport: String,
    comments: String
})



module.exports = mongoose.model('Sports', SportsSchema)