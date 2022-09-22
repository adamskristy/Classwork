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

//middleware
app.use(fruitRoutes);
app.use(vegetableRoutes);
app.use(meatRoutes);

//listen to port
app.listen(3000,() => {
    console.log('listening');
});

