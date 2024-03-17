const mongoose = require('mongoose')
const {photoModel} = require('./schema')

mongoose.connect('mongodb+srv://juditbardonromero:Code123@cluster0.z0pirhf.mongodb.net/Fotos')

// Creacion de fotos y usuarios

const photo = new photoModel({
    userName: "Marta",
    photoURL: "https://www.google.es/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fes%2Fphotos%2Fmujer.html&psig=AOvVaw2-G7z-Y6TibOM6aAAkdL7_&ust=1710011583409000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiKiYy95YQDFQAAAAAdAAAAABAE",
    title: "Foto de perfil",
    description: "Foto de perfil para el trabajo"
})

const photo2 = new photoModel({
    userName: "Marta", 
    photoURL: "https://www.google.es/url?sa=i&url=https%3A%2F%2Fwww.elconfidencial.com%2Fdecompras%2Flifestyle%2F2022-01-14%2Fmejores-zapatillas-de-deporte-de-mujer_3356662%2F&psig=AOvVaw00HVqW1pBP4Wy5116VFPTH&ust=1710011682572000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiZ17u95YQDFQAAAAAdAAAAABAE",
    title: "Corriendo",
    description: "Foto corriendo"
})

const photo3 = new photoModel({
    userName: "Juan", 
    photoURL: "https://www.google.es/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos%2Fhombre&psig=AOvVaw1VJ1lHgK_DoHl36rUpdIFh&ust=1710011850830000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCJz4u-5YQDFQAAAAAdAAAAABAE",
    title: "Perfil",
    description: "Foto de perfil"
})

//Reto 1: subida de fotos

//  photo.save()
//  .then((result) => {
//      console.log("Foto añadida");
//      return photo2.save();
//  })
//  .then((result) => {
//      console.log("Foto2 añadida");
//      return photo3.save()
//  }).then((result) => {
//      console.log("Foto3 añadida")
//  }).catch((error) => {
//      console.log(error)
//  })

// Obtener fotos:

// photoModel.find({userName: "Marta"})
//     .then( res => {
//         console.log(res),
//         mongoose.disconnect();
//     }).catch(err => {
//         console.log(err)
//     })

// Modificar fotos: dado el titulo de una foto y una descripción, modificar descripcion:

// photoModel.updateOne({title: "Perfil", description: "Foto de perfil"}, {description: "Nueva foto!"})
//     .then(res => {
//         console.log("La descripción ha sido modificada", res);
//         mongoose.disconnect()
//     }).catch(err => {
//         console.log(err)
//     })

// Dado un usuario y un titulo de foto, eliminar la foto:

//  photoModel.deleteOne({userName: "Marta", title: "Corriendo" })
//   .then(res => {
//      console.log("Foto eliminada", res);
//      mongoose.disconnect()
//   }).catch(err => {
//      console.log(err)
//   })

// Dado un usuario, eliminar todas sus fotos:

 photoModel.deleteMany({userName: "Marta"})
  .then(res => {
    console.log("Todas las fotos de este usuario han sido borradas"),
    mongoose.disconnect()
  }).catch(err => {
    console.log(err)
  })