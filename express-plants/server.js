// load express
const express = require('express');


//create the app
const app = express();
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"]; //above app.get

//define the routes

//place specific route higher up
app.get('/awesome', (req, res) => { //this will never be reached
    res.send(`<h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
  });

app.get('/:indexOfPlantsArray', (req, res) => {
    if (plants[req.params.index]) {
        res.send(plants[req.params.indexOfPlantsArray]);
        // error cannot send more than one response! use if statement
        //res.send('this is the index: ' + req.params.indexOfPlantsArray);
  } else {
    res.send('cannot find anything at this index: ' + req.params.indexOfPlantsArray);
  }
});

//example with multiple params
//localhost:3000/hello/name/name
app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});

//example with query

//in url
//localhost:3000/howdy/bob?title=duke
app.get('/howdy/:firstName', function(req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send('hello ' + req.query.title + ' ' + req.params.firstName);
  })

//unable to do this route because too similar
//more specific routes should go on top
// app.get('/plants', (req, res) => {

// })

//listen to port 3000
app.listen(3000, () => {
    console.log('Listening to port on 3000')
})