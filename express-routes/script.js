//examples
//   http://localhost:3000/user?name=Rasheem&age=25,

// app.get('/user', function (req, res) {
//     console.log("Name: ", req.query.name);
//     console.log("Age:", req.query.age);
//     res.send();
//   });
//   So this basically creates our params
  
//Define root routes
app.get('/', (req, res) => {
    color = req.query.color
    if(color == 'red'){
        red = fruits.filter(fruit => fruit.color == req.query.color)
        res.send(red)
    }
});


//Listen on port
app.listen(port,() => {
    console.log('Listening on port:', port)
})



/*
TASK:
Use queries to filter data sent back to the client.
Create at least two filters based off queries. You can use the root route.

HINTS:
    -?key=Value
    -req.query
    -filter method (JS)
    -if statments

*/