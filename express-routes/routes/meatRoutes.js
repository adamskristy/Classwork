//load express
const express = require('express')

//create special router object for our routes
const router = express.Router();

//load meat data
const Meat = require('../models/meat')

//setup Index route
router.get('/', (req, res) => {
    Meat.find({}, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Index', {meat: foundMeat})
        }
    })
    // res.render('meats/Index', {meat: meat})
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