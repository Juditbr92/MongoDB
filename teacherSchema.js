const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String]
})

let teacherModel = mongoose.model("teacher", teacherSchema)

module.exports = {teacherModel}