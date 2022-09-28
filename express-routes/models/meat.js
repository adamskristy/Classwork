//Load mongoose
const mongoose = require('mongoose')

//add shortcut to schema
const Schema = mongoose.Schema

//create our schema
const meatSchema = new Schema ({
    name: {type: String, required: true },
    type: {type: String, required: true }
})

//create a model from our schema
const Meat = mongoose.model('Meat', meatSchema)

//export our model
module.exports = Meat;