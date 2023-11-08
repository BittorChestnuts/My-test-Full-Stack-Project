require("dotenv").config({path:"../.env"})
const mongoose = require("mongoose")
//const CharacterModel = require('./character.model')
const Character = require("../models/Character.model")

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI)
    .then(() => console.log("connected to the Database"))
    .then(()=>{
        return Character.deleteMany()
    })
    .then(() =>{
        return getCharacterAndInsertThem()
    })
    .catch((error) => console.log(error))

function getCharacterAndInsertThem(){
    fetch("https://rickandmortyapi.com/api/character")
        .then((data) => data.json())
        .then((jsonData) => {
            const cleanedArray = []
            jsonData.results.forEach(element => {
                const object = { name: element.name, imageURL: element.image, episodes:[] }
                cleanedArray.push(object)
            });
            return cleanedArray
        })
        .then((cleanedArray) => {
            return Character.insertMany(cleanedArray)
        })
    
        .then((characters) => {console.log("characters created", characters) })
        .catch((error) => console.log(error))

}

