// EXPRESS.JS

//built around http module
//add three web application capabilities to node
    // The ability to define routes
    // The ability to process HTTP requests using middleware
    // The ability to use a view engine to render dynamic templates

////////////////////////////////////////////////////

// Load express
const express = require('express')

//Create our express app
const app = express()

//configure the app (app.set)
const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine

//Mount middleware(app.use)

//Mount routes

//Define our root route (home path)
//pass two argurments
//the path "/" , and request and response
app.get('/', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am the Boss Ricky Ross' })
})
  
app.get('/about-me', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Rick Ross!', content: 'The most underated Rapper in the game' })
})
  
app.get('/another-one', (req, res) => {
    res.render('template', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
})

//Tell our app to listen on port 3000
//for HTTP request from clients
//show messages or responses you server is getting
app.listen(3000, () => {
    console.log('Listening on port 3000');
})

//can define more than one route on the same path
//as long as they use different method

// app.get('/cars', function(req, res) {
//     res.send("Here's a list of my cars...");
//   });
  
//   app.post('/cars', function(req, res) {
//     res.send('Thanks for the new car!');
//   });


//What method do we call to render a view and on what object does that method exist?
//render is method and res is object

