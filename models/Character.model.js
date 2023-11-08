const mongoose = require("mongoose")

const Schema = mongoose.Schema

const CharacterModel = new Schema({
    name: {
      type: String,
      require: true,
    },
    imageURL: {
      type: String,
      require: true,
    },
    episodes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Episode"}]
    
    
  })

  const Character = mongoose.model('character', CharacterModel)

  module.exports = Character