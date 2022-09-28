//load express
const express = require('express');


//html forms don't accept any method other than POST or GET
//so use this package to help
const methodOverride = require('method-override')

// Bring in mongoConfig function
const mongoConfig = require('./config')


//bring in our packaged routes
const fruitRoutes = require('./routes/fruitsRoutes')
const vegetableRoutes = require('./routes/vegetableRoutes')
const meatRoutes = require('./routes/meatRoutes')


require('dotenv').config()

//create our express app (object)
const app = express();

//Identify our port
const port = process.env.PORT;

//Setup VIEW ENGINE
app.set('view engine', 'jsx'); //setting up cofingurations
app.engine('jsx', require('express-react-views').createEngine()); //specify file extentions

// MIDDLEWARE
//inbetween step in response cycle, usually for authentication
//It bridges the server and app requests

//this line of code allows us to access that url with the properites
app.use(express.urlencoded({extended:false}));
// ?name=kiwi&color=green&readyToEat=value

app.use(express.static("public"))
app.use(methodOverride("_method"))


app.use('/fruits', fruitRoutes);
app.use('/vegetables', vegetableRoutes);
app.use('/meats', meatRoutes);


// Listen to port
app.listen(port, () => console.log('Listening on port: ', port))

// Connect to DB
mongoConfig()


