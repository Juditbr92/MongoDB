const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://juditbardonromero:Code123@cluster0.z0pirhf.mongodb.net/School')

// Creacion schemas:

const teacherSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String]
})

const subjectsSchema = new mongoose.Schema({
    title: String,
    teacher: [teacherSchema]
})

const marksSchema = new mongoose.Schema({
    date: Date, 
    mark: Number, 
    subject: {}
})

const studentSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String, 
    marks: [marksSchema]
})

// Añadir subjects a teacherSchema
teacherSchema.add({subjects: [subjectsSchema]})

// Añadir marks a subjectsSchema
subjectsSchema.add({marks: {marksSchema}})

// const teacherModel = mongoose.model("teacher", teacherSchema);
// const subjectModel = mongoose.model("subject", subjectsSchema);
// const marksModel = mongoose.model('marks', marksSchema);
const studentModel = mongoose.model('student', studentSchema);

// Creacion de estudiantes: 

const student1 = new studentModel({
    firstName: "Judit",
    lastName: "Bardon",
    marks: [
        {
            date: new Date(2022, 10, 8),
            mark: 8,
            subject: {
                title: "Mongo",
                teacher: {
                    firstName: "Mario",
                    lastName: "Lopez",
                    group: ["A", "C"]
                }
            }
        },
        {
            date: new Date(2022, 5, 15),
            mark: 7,
            subject: {
                title: "HTML",
                teacher: {
                    firstName: "Jorge",
                    lastName: "Garcia",
                    group: ["B", "A", "D"]
                }
            }
        },
        {
            date: new Date(),
            mark: 5,
            subject: {
                title: "POO",
                teacher: {
                    firstName: "Lucia",
                    lastName: "Peña",
                    group: ["A", "D"]
                }
            }
        }
    ]
});

const student2 = new studentModel({
    firstName: "Marta", 
    lastName: "Sanz",
    marks: [
        {date: new Date(2023, 10, 18),
        mark: 9, 
        subject: {
            title: "HTML",
            teacher: {
                firstName: "Antonio", 
                lastName: "Marquez",
                group: ["A", "D"]
            }
        }}, 
        {
            date: new Date(2024, 3, 13),
            mark: 7, 
            subject: {
                title: "SQL", 
                teacher: {
                    firstName: "Luisa", 
                    lastName: "Martinez", 
                    group: ["C", "D"]
                }
            }
        }, 

        {
            date: new Date(2021, 12, 15),
            mark: 9, 
            subject: {
                title: "JavaScript", 
                teacher: {
                    firstName: "Ana", 
                    lastName: "Rodrigez",   
                    group: ["C", "D"]
                }
            }
        }, 

        {
            date: new Date(2024, 5, 18),
            mark: 6,
            subject: {
                title: "POO", 
                teacher: {
                    firstName: "Monica", 
                    lastName: "Sanchez",
                    group: ["A", "C"]
                }
            }
        }
    ]
})

// Guardar student en BBDD: 

student1.save()
    .then((result) => {
        console.log("Estudiante añadido:", result)
        return student2.save()
    })
    .then((result) => {
        console.log("Estudiante añadido:", result)
    })
    .catch((error) => {
        console.log(error)
    })


// Mostrar todas las notas de un alumno:

studentModel.findOne({ firstName: "Marta" })
    .then((result) => {
        console.log(result.marks.map((mark => mark.mark)))
    })
    .catch(function(error) {
        console.log(error);
    });

    // Todas las asignaturas de un alumno:

studentModel.findOne({firstName: "Marta"})
    .then((result) => {
        console.log(result.marks.map((mark => mark.subject.title)))
    }).catch((error)=> {
        console.log(error)
    })

// Todos los profesores de un alumno:

studentModel.findOne({firstName: "Marta"})
    .then((result) => {
        console.log(result.marks.map((mark => mark.subject.teacher)))
    }).catch((error) => {
        console.log(error)
    })