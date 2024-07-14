const mongoose = require('mongoose');

// defining the schema for the animal data
const animalSchema = new mongoose.Schema({
    name: String,
    latitude: Number,
    longitude: Number
});

// creating the Animal model using the schema
const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
