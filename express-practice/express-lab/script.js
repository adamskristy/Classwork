// EXPRESS LAB

//Load express
const express = require('express');

//create the app
const app = express();

//define the routes

//Greetings
app.get('/greeting/:name', (req, res) => {
    res.send('hello ' + req.params.name);
});

//listen to port 3000
app.listen(3000, () => {
    console.log('listening to port on 3000')
})

//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    tip = req.params.total * (req.params.tipPercentage / 100)
    res.send('Your tip is ' + tip)
})

// Magic 8 ball
app.get('/magic/:question', (req, res) => {

    const quotes = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    randomQuotes = quotes[Math.floor(Math.random() * quotes.length - 1)]

res.send(`Your question: <h1> ${req.params.question}</h1> ${randomQuotes}`)
})