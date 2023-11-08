const express = require('express');
const router = express.Router();

const Character = require('../models/Character.model') 
const Episode = require('../models/Episode.model')


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/form", (req, res, next) => {
  const characterFound = Character.find()
  const episodeFound = Episode.find()
  res.send("form", {characterFound, episodeFound} );
});

router.post("/character/add-to-episode", (req, res, next) =>{
  
res.render("/character/add-to-episode")
})

module.exports = router;
