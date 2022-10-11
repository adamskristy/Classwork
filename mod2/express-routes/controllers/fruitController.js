const Fruit = require('../models/fruit')

const seed = require('../models/seed')

// ROUTE     GET /fruits    (index)
const findAllFruits = (req, res) => {
    //Find takes two arguments
    //1st: an object with our query (to filter our data and find exactly ehat we need)
    //2nd: callack (with an error object and the found data)
    Fruit.find({}, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Index', {fruits: foundFruit})
        }
    })
}

// ROUTE      GET /fruits/new    (new)
const showNewView = (req, res) =>{
    // res.send('<form>Create fruit</form>')
    res.render('fruits/New')
}

// ROUTE       DELETE /fruits/:id      (destroy)
const deleteOneFruit =  (req, res) => {
    // res.send('Deleting a fruit at index')

    Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
        //1st param matches the route :index->id, _id ->_id
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits')
        }
    })
}

// ROUTE     PUT /fruits/:id       (update)
const updateOneFruit =  (req,res) => {

    console.log(req.body);

    if(req.body.readyToEat === "on" || req.body.readyToEat === true ){
        req.body.readyToEat = true
    } else{
        req.body.readyToEat = false
    }

    //takes four arguments:
    //  1st: id
    //  2nd: new data we want to use to update old document
    //  3rd: (optional): an options object, which looks like this: {new: true}
    //  4th: callback (with error object updated and foundFruit or updatedFruit)
    Fruit.findByIdAndUpdate(req.params.id, req.body, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/fruits/${req.params.id}`)
        }
    })
}

// ROUTE     POST /fruits     (create)
const createNewFruit = (req, res) => {
    console.log(req.body);
    if(req.body.readyToEat === "on"){
        req.body.readyToEat = true
    } else{
        req.body.readyToEat = false
    }
    //create has two arguments:
    //1st: the data we want to send, 
    //2nd : call back function
    Fruit.create(req.body, (err, createdFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('fruits/')
        }    
    })
}

// ROUTE      GET /fruits/:id/edit     (edit)
const showEditView = (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Edit', {fruit: foundFruit})
        }
    })
}

// ROUTE       GET /fruits/seed      (seed)
const seedStarterData = (req, res) => {
    // Delete all remaining documents (if there are any)
        Fruit.deleteMany({}, (err, deletedFruits) => {
            if (err) {
                res.status(400).json(err)
            } else {
                //data successfully deleted
                //now use seed data to repopulate
                Fruit.create(seed.fruits, (err, createdFruit) => {
                    if (err) {
                        res.status(400).json(err)
                    } else {
                        res.status(200).redirect('/fruits/')
                    }
                })
            }
        })
    }

    // ROUTE       GET /fruits/clear     (clear)
const clearFruitData = (req, res) => {
    // Delete all remaining documents (if there are any)
    Fruit.deleteMany({}, (err, deletedFruits) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits/')
        }
    })
}

// ROUTE     GET /fruits/:id     (show)
const showOneFruit = (req, res) => {
    // res.send(fruits[req.params.index]);
    
    //findById accepts two arguments:
    //1st: id of document in our database
    //2nd: callback with error object and found document
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if(err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Show', {fruit: foundFruit})
        }
    }) 
}




module.exports = {
    findAllFruits,
    showNewView,
    deleteOneFruit, 
    updateOneFruit,
    createNewFruit,
    showEditView,
    seedStarterData,
    clearFruitData,
    showOneFruit,
      
}