const mongoose = require('mongoose')
const {subjectModels} = require('./reto2/subjectSchema.js')

const marksSchema = new mongoose.Schema({
    date: Date, 
    mark: Number, 
    subject: subjectSchema
})

subjectSchema.add({mark:{marksSchema}})

const marksModel = mongoose.model('marks', marksSchema );


const mark1 = new marksModel({
    date: new Date(2020, 11, 5),
    mark: 9,
    subject: [subjectJS]
})

const mark2 = new marksModel({
    date: new Date(),
    mark: 7,
    subject: [subjectAngular]
})

const mark3 = new marksModel({
    date: new Date(2019, 5, 18),
    mark: 7, 
    subject: [subjectMongo]
})

const mark4 = new marksModel({
    date: new Date(2023, 9, 12),
    mark: 4, 
    subject: [subjectHTML]
})

const mark5 = new marksModel({
    date: new Date(2022, 10, 19), 
    mark: 7, 
    subject: [subjectRuby]
})

module.exports = {marksModel}