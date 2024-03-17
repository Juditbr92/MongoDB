const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://juditbardonromero:Code123@cluster0.z0pirhf.mongodb.net/School')

// Creacion schemas:

const teacherSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String]
})

let teacherModel = mongoose.model("teacher", teacherSchema)

const marksSchema = new mongoose.Schema({
    date: Date, 
    mark: Number, 
    subject: {}
})

const marksModel = mongoose.model('marks', marksSchema );

const subjectsSchema = new mongoose.Schema({
    title: String,
    teacher: [teacherSchema],
    marks: []
})

let subjectModel = mongoose.model("subject", subjectsSchema)

// Añadir subjects a teachers:
teacherSchema.add({subjects: [subjectsSchema]})

// Añadir marks a subjects:
subjectsSchema.add({marks: {marksSchema}})

// Creacion de teachers:

const teacher1 = new teacherModel({
    firstName: "Juan",
    lastName: "Gomez",
    groups: ["A", "B", "E"],
    subjects: []
})

const teacher2 = new teacherModel({
    firstName: "Marta",
    lastName: "Martinez",
    groups: ["A", "C", "D"],
    subjects: []
})

const teacher3 = new teacherModel({
    firstName: "Ana",
    lastName: "Garcia",
    groups: ["E", "F"],
    subjects: []
})

const teacher4 = new teacherModel({
    firstName: "Jose",
    lastName: "Heredia", 
    groups: ["A", "B"],
    subjects: []
})

const teacher5 = new teacherModel({
    firstName: "Yoli",
    lastName: "Gonzalez",
    groups: ["A", "C"],
    subjects: []
})

// Creacion de subjects:

const subjectRuby = new subjectModel({
    title: "Ruby",
    teacher:[teacher4, teacher1],
    marks: []
})

const subjectHTML = new subjectModel({
    title: "HTML",
    teacher: [teacher1, teacher5],
    marks: []
})

const subjectAngular = new subjectModel({
    title: "Angular",
    teacher: [teacher5],
    marks: []
})

const subjectMongo = new subjectModel({
    title: "Mongo", 
    teacher: [teacher2, teacher3],
    marks: []
})

const subjectJS = new subjectModel({
    title: "JavaScript",
    teacher: [teacher3, teacher4],
    marks: []
})

// Meter profesores en BBDD: 

teacher1.save()
    .then((result) => {
       console.log("Profesor1 añadido")
    return teacher2.save()
    })   
    .then((result) => {
        console.log("Profesor2 añadido")
        return teacher3.save()
    }).then((result) => {
        console.log("Profesor3 añadido")
        return teacher4.save()
    }).then((result) => {
        console.log("Profesor4 añadido")
        return teacher5.save()
    }).then((result) => {
        console.log("Profesor5 añadido")
    })
    .catch((error) => {
        console.log(error)
    })

// Meter subjects en teachers:

async function addSubjects(){
    try{ await teacherModel.updateOne(
            {firstName: "Juan"},
            {subjects: [subjectRuby, subjectHTML]})
            console.log("Subjects de Juan actualizadas");

        await teacherModel.updateOne(
            {firstName: "Marta"},
            {subjects: [subjectMongo]})
            console.log("Subjects de Marta actualizadas");

        await teacherModel.updateOne(
            {firstName: "Ana"},
            {subjects: [subjectMongo, subjectJS]})
            console.log("Subjects de Ana actualizadas");

        await teacherModel.updateOne(
            {firstName: "Jose"},
            {subjects: [subjectRuby, subjectJS]})
            console.log("Subjects de Jose actualizadas");

        await teacherModel.updateOne(
            {firstName: "Yoli"},
            {subjects: [subjectHTML, subjectAngular]})
            console.log("Subjects de Yoli actualizadas")
    } catch(err) {
        console.log(err)
    }
}

addSubjects()

// Creacion Marks:

const mark1 = new marksModel({
    date: new Date(2020, 11, 5),
    mark: 9,
    subject:{
        subjectJS
    }
})

const mark2 = new marksModel({
    date: new Date(),
    mark: 7,
    subject: {
        subjectMongo
    }
})

const mark3 = new marksModel({
    date: new Date(2019, 5, 18),
    mark: 7, 
    subject: {subjectRuby}
})

const mark4 = new marksModel({
    date: new Date(2023, 9, 12),
    mark: 4, 
    subject: {subjectAngular}
})

const mark5 = new marksModel({
    date: new Date(2022, 10, 19), 
    mark: 7,
    subject: {subjectHTML}
})

// meter notas en subjects:

async function addMarks(){
    try{
        await subjectModel.updateOne(
            {title: "JavaScript"},
            {$push: {mark: {mark1}}}
        )
        console.log("Nota para JS actualizada");

        await subjectModel.updateOne(
            {title: "Ruby"},
            {$push: {mark: {mark5}}}
        )
        console.log("Nota para Ruby actualizada");

        await subjectModel.updateOne(
            {title: "HTML"},
            {$push: {mark: {mark4}}}
        )
        console.log("Nota para HTML actualizada");

        await subjectModel.updateOne(
            {title: "Angular"},
            {$push: {mark: {mark2}}}
        )
        console.log("Nota para Angular actualizada");

        await subjectModel.updateOne(
            {title: "Mongo"},
            {$push: {mark: {mark3}}}
        )
        console.log("Nota para Mongo actualizada")
    }catch(error){
        console.log(error)
    }
}

addMarks()


// // Creacion studentSchema:
// 
// const studentSchema = new mongoose.Schema({
//     firstName: String, 
//     lastName: String, 
//     marks: [marksSchema]
// })
// 
// const studentModel = mongoose.model('student',studentSchema);
// 
// 
// 