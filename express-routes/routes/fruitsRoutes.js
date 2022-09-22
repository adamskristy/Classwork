//load express
const express = require('express');

//create special router object for our routes
const router = express.Router();

//Load our fruits data
const fruits = require('../models/fruits')

//setup root route
router.get('/', (req, res) => {
    res.send('<h1Fruit Salad, Yummy yummy</h1>');
});

//setup index route
router.get('/fruits', (req, res) => {
    res.send(fruits);
});

//Setup new route
router.get('/fruits/new', (req, res) =>{
    res.send('<form>Create fruit</form>')
})

//Setup "Create" route
router.post('/fruits', (req, res) => {
    res.send('Creating a new fruit')
})

//add show route
router.get('/fruits/:index', (req, res) => {
    res.send(fruits[req.params.index]);
});

//Setup "edit" route
router.get('/fruits/edit/:index/edit', (req, res) => {
    res.send('<form> Edit fruit</form>')
})

//Setup "update"
router.put('/fruits/:index', (req,res) => {
    res.send('Updating a fruit (in DB)')
})

//Setup "destroy"
router.delete('/fruits/:index', (req, res) => {
    res.send('Deleting a fruit')
}) 

module.exports = router;