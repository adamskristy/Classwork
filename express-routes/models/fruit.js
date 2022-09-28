//load mongoose
const mongoose = require('mongoose')

//add shortcut to schema
const Schema = mongoose.Schema

//create our schema
const fruitSchema = new Schema({
    name: { type: String, required: true }, 
    color: { type: String, required: true },
    readyToEat: Boolean
})

//create a model from our schema
const Fruit = mongoose.model('Fruit', fruitSchema)

//export our model
module.exports = Fruit;