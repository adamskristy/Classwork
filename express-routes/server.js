//load express
const express = require('express');

//bring in our packaged routes
const fruitRoutes = require('./routes/fruitsRoutes')
const vegetableRoutes = require('./routes/vegetableRoutes')
const meatRoutes = require('./routes/meatRoutes')

//create our app app (object)
const app = express();

//Identify our ports
const port = 3000;

//Setup view engine
app.set('view engine', 'jsx'); //setting up cofingurations
app.engine('jsx', require('express-react-views').createEngine()); //specify file extentions

//middleware - inbetween step in response cycle, usuall for authentication
//It bridges the server and app requests

//this line of code allows us to access that url with the properites
app.use(express.urlencoded({extended:false}));

// ?name=kiwi&color=green&readyToEat=value

app.use('/fruits', fruitRoutes);
app.use('/vegetables', vegetableRoutes);
app.use('/meats', meatRoutes);

//listen to port
app.listen(3000,() => {
    console.log('listening on port 3000');
});



