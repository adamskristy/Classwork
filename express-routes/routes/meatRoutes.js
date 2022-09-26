//load express
const express = require('express')

//create special router object for our routes
const router = express.Router();

//load meat data
const meat = require('../models/meats')

//setup Index route
router.get('/', (req, res) => {
    res.render('meats/Index', {meat: meat})
});

//setup New route
router.get('/new', (req, res) => {
    res.render('meats/New')
})

//setup Show route
router.get('/:index', (req, res) => {
    res.send(meat[req.params.index]);
});

//setup Edit route

module.exports = router;