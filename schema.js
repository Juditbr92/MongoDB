const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
    userName: String,
    photoURL: String, 
    title: String,
    description: String
})

const photoModel = mongoose.model('photo', photoSchema)

module.exports = {photoModel}