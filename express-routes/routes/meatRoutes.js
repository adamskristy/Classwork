//load express
const express = require('express')

//create special router object for our routes
const router = express.Router();

//load meat data
const meat = require('../models/meats')

//setup index route
router.get('/meat', (req, res) => {
    res.send(meat);
});

//setup the show route
router.get('/meat/:index', (req, res) => {
    res.send(meat[req.params.index]);
});

module.exports = router;