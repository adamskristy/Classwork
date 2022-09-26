//load express
const express = require('express');

//create special router object for our routes
const router = express.Router();

//Load vegetable data
const vegetables = require('../models/vegetables');

//setup Index route
router.get('/', (req, res) => {
    res.render('vegetables/Index', {vegetables: vegetables}) 
})

//setup New route
router.get('/new', (req, res) => {
    res.render('vegetables/New')
})

//setup Show route
router.get('/:index', (req, res) => {
    res.send(vegetables[req.params.index]);
});

//setup Edit route

module.exports = router;