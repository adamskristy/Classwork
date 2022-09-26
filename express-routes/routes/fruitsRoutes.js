//load express
const express = require('express');

//INDUCES
// Index, New, Delete, Update, Create, Edit, Show

//create special router object for our routes
const router = express.Router();

//Load our fruits data
const fruits = require('../models/fruits')

// //setup root route
// router.get('/', (req, res) => {
//     res.send('<h1Fruit Salad, Yummy yummy</h1>');
// });
//too similar to index route below so index would take priority

//setup Index route
router.get('/', (req, res) => {
    // res.send(fruits);
    res.render('fruits/Index', {fruits: fruits});
});

//Setup New route
router.get('/new', (req, res) =>{
    // res.send('<form>Create fruit</form>')
    res.render('fruits/New')
})

//Setup "Destroy"
router.delete('/:index', (req, res) => {
    res.send('Deleting a fruit')
}) 

//Setup "Update"
router.put('/:index', (req,res) => {
    res.send('Updating a fruit (in DB)')
})

//Setup "Create" route
router.post('/', (req, res) => {
    console.log(req.body);
    if(req.body.readyToEat === "on"){
        req.body.readyToEat = true
    } else{
        req.body.readyToEat = false
    }
    fruits.push(req.body);
    console.log(fruits);
    // res.send('Creating a new fruit');
    res.redirect('/fruits') //redirect to home pge
})

//Setup "Edit" route
router.get('/edit/:index/edit', (req, res) => {
    res.send('<form> Edit fruit</form>')
})

//Setup "Show" route
router.get('/:index', (req, res) => {
    // res.send(fruits[req.params.index]);
    res.render('fruits/Show', {fruit: fruits[req.params.index]})
    //setup object called fruit with property of fruit
    // 
});

module.exports = router;