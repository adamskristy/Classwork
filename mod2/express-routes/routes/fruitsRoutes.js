//load express
const express = require('express');

//create special router object for our routes
const router = express.Router();

//Loading our Model of fruit
// const fruits = require('../models/fruits')
const Fruit = require('../models/fruit')

// Bring in seed data
const seed = require('../models/seed')

// Bring in controller functions (destructure methods)
const { 
    findAllFruits, 
    showNewView, 
    createNewFruit,
    seedStarterData,
    showOneFruit,
    showEditView,
    updateOneFruit,
    clearFruitData,
    deleteOneFruit
} = require('../controllers/fruitController')

// Bring in controller object (with methods attached)
// const fruitController = require('../controllers/fruitController')
// Example: router.get('/', fruitController.findAllFruits)


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// INDEX
router.get('/', findAllFruits)

// NEW 
router.get('/new', showNewView )

// DESTROY 
router.delete('/:id', deleteOneFruit) 

// UPDATE
router.put('/:id', updateOneFruit)

// CREATE
router.post('/', createNewFruit)

// EDIT
router.get('/:id/edit',showEditView )

// SEED
router.get('/seed',seedStarterData )

// CLEAR
router.get('/clear', clearFruitData)

// SHOW
router.get('/:id', showOneFruit)

module.exports = router;