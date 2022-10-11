//load express
const express = require('express')

//create special router object for our routes
const router = express.Router();

//load meat data
const Meat = require('../models/meat')

// Bring in seed data
const seed = require('../models/seed')

// Bring in controller functions (destructure methods)
const {
    findAllMeats,
    showNewView,
    deleteOneMeat, 
    updateOneMeat,
    createNewMeat,
    showEditView,
    showOneMeat,
    clearMeatData,
    seedStarterData  
} = require('../controllers/meatController')

// Setup "index" route
router.get('/', findAllMeats)

// Setup "new" route
router.get('/new', showNewView)

// Setup "destroy" route
router.delete('/:id', deleteOneMeat)

// Setup "update" route
router.put('/:id', updateOneMeat)

// Setup "create" route
router.post('/', createNewMeat)

// Setup "edit" route
router.get('/:id/edit', showEditView)

// Setup "seed" route
router.get('/seed', seedStarterData)

// Setup "show" route  
router.get('/:id', showOneMeat)

module.exports = router;