const Vegetable = require('../models/vegetable')

const seed = require('../models/seed')

// ROUTE     GET /vegetables    (index)
const findAllVegetables = (req, res) => {
    Vegetable.find({}, (err, foundVegetables) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Index', {vegetables: foundVegetables})
        }
    })
}

// ROUTE      GET /vegetables/new    (new)
const showNewView = (req, res) =>{
    res.render('vegetables/New')
}

// ROUTE       DELETE /vegetables/:id      (destroy)
const deleteOneVegetable =  (req, res) => {
    Vegetable.findByIdAndDelete(req.params.id, (err, deletedVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegetables')
        }
    })
}

// ROUTE     PUT /vegetables/:id       (update)
const updateOneVegetable =  (req,res) => {
    Vegetable.findByIdAndUpdate(req.params.id, req.body, (err, foundVegetables) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/vegetables/${req.params.id}`)
        }
    })
}

// ROUTE     POST /vegetables     (create)
const createNewVegetable = (req, res) => {
    Vegetable.create(req.body, (err, createdVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('vegetables/')
        }    
    })
}

// ROUTE      GET /vegetables/:id/edit     (edit)
const showEditView = (req, res) => {
    Vegetable.findById(req.params.id, (err, foundVegetables) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Edit', {vegetables: foundVegetables})
        }
    })
}

// ROUTE       GET /vegetables/seed      (seed)
const seedStarterData = (req, res) => {
    Vegetable.deleteMany({}, (err, deletedVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            Vegetable.create(seed.vegetables, (err, createdVegetable) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/vegetables/')
                }
            })
        }
    })
}

    // ROUTE       GET /vegetables/clear     (clear)
    const clearVegData = (req, res) => {
        // Delete all remaining documents (if there are any)
        Vegetable.deleteMany({}, (err, deletedFVegetables) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).redirect('/vegetables/')
            }
        })
    }


// ROUTE     GET /vegetables/:id     (show)
const showOneVegetable = (req, res) => {
   Vegetable.findById(req.params.id, (err, foundVegetables) => {
        if(err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Show', {vegetables: foundVegetables})
        }
    }) 
}


module.exports = { 
    findAllVegetables,
    showNewView, 
    deleteOneVegetable,
    updateOneVegetable,
    createNewVegetable,
    showEditView,
    seedStarterData,
    clearVegData,
    showOneVegetable, 
} 