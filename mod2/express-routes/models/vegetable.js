//loadmongoose
const mongoose = require('mongoose')

//add shortcut to schema
const Schema = mongoose.Schema

//create our schema
const vegetableSchema = new Schema({
    name: { type: String, required: true }, 
    color: { type: String, required: true },
})

//create a model from our schema
const Vegetable = mongoose.model('Vegetable', vegetableSchema)

//export our model
module.exports = Vegetable;