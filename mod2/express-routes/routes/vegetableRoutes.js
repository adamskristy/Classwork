//load express
const express = require('express');

//create special router object for our routes
const router = express.Router();

//Load vegetable data
const Vegetable = require('../models/vegetable');

// Bring in seed data
const seed = require('../models/seed')

// Bring in controller functions (destructure methods)
const { 
    findAllVegetables,
    showNewView, 
    deleteOneVegetable,
    updateOneVegetable,
    createNewVegetable,
    showEditView,
    seedStarterData,
    clearVegData,
    showOneVegetable, 
} = require('../controllers/vegController')

// Setup "index" route
router.get('/', findAllVegetables)

// Setup "new" route
router.get('/new', showNewView)

// Setup "destroy" route
router.delete('/:id', deleteOneVegetable)

// Setup "update" route
router.put('/:id', updateOneVegetable)

// Setup "create" route
router.post('/', createNewVegetable)

// Setup "edit" route
router.get('/:id/edit', showEditView)

// Setup "seed" route
router.get('/seed', seedStarterData)

// CLEAR
router.get('/clear', clearVegData)

// Setup "show" route  
router.get('/:id', showOneVegetable)

module.exports = router;