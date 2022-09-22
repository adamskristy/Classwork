//load express
const express = require('express');

//create special router object for our routes
const router = express.Router();

//Load our vegetable data
const vegetables = require('../models/vegetables');

//setup index route
router.get('/vegetables', (req, res) => {
    res.send(vegetables) 
})

//setup show route
router.get('/vegetables/:index', (req, res) => {
    res.send(vegetables[req.params.index]);
});

module.exports = router;