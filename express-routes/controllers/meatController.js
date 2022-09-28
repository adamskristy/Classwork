const Meat = require('../models/meat')

const seed = require('../models/seed')

// ROUTE     GET /meats    (index)
const findAllMeats = (req, res) => {
    Meat.find({}, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Index', {meat: foundMeat})
        }
    })
}

// ROUTE      GET /meats/new    (new)
const showNewView = (req, res) =>{
    res.render('meats/New')
}

// ROUTE       DELETE /fruits/:id      (destroy)
const deleteOneMeat =  (req, res) => {
    Meat.findByIdAndDelete(req.params.id, (err, deletedMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meats')
        }
    })
}

// ROUTE     PUT /fruits/:id       (update)
const updateOneMeat =  (req,res) => {
    Meat.findByIdAndUpdate(req.params.id, req.body, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/meats/${req.params.id}`)
        }
    })
}

// ROUTE     POST /fruits     (create)
const createNewMeat = (req, res) => {
    Meat.create(req.body, (err, createdMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('meats/')
        }    
    })
}

// ROUTE      GET /fruits/:id/edit     (edit)
const showEditView = (req, res) => {
    Meat.findById(req.params.id, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Edit', {meat: foundMeat})
        }
    })
}

// ROUTE       GET /fruits/seed      (seed)
const seedStarterData = (req, res) => {
    Meat.deleteMany({}, (err, deletedMeats) => {
        if (err) {
            res.status(400).json(err)
        } else {
            Meat.create(seed.meat, (err, createdMeat) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/meats/')
                }
            })
        }
    })
}


// ROUTE     GET /fruits/:id     (show)
const showOneMeat = (req, res) => {
   Meat.findById(req.params.id, (err, foundMeat) => {
        if(err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meats/Show', {meat: foundMeat})
        }
    }) 
}



module.exports = {
    findAllMeats,
    showNewView,
    deleteOneMeat, 
    updateOneMeat,
    createNewMeat,
    showEditView,
    showOneMeat,
    seedStarterData  
}