const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String, 
    marks: [marksSchema]
})

const studentModel = mongoose.model('student',studentSchema);

module.exports = {studentModel}