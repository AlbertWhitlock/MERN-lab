const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/sports')

module.exports = mongoose