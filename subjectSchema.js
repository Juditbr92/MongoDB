const mongoose = require('mongoose')
const {teacherModel} = require('reto2/teacherSchema.js')

const subjectsSchema = new mongoose.Schema({
    title: String,
    teacher: [teacherSchema], 
    mark: {}
})

const subjectRuby = new subjectModel({
    title: "Ruby",
    teacher:[teacher4, teacher1],
    mark: {}
})

const subjectHTML = new subjectModel({
    title: "HTML",
    teacher: [teacher1, teacher5],
    mark: {}
})

const subjectAngular = new subjectModel({
    title: "Angular",
    teacher: [teacher5],
    mark: {}
})

const subjectMongo = new subjectModel({
    title: "Mongo", 
    teacher: [teacher2, teacher3],
    mark: {}
})

const subjectJS = new subjectModel({
    title: "JavaScript",
    teacher: [teacher3, teacher4],
    mark: {}
})


let subjectModel = mongoose.model("subject", subjectsSchema)

module.exports = {subjectModel}