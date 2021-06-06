// Stock Market Portfolio App By Aniket

const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');
const path = require('path');
const request =require('request');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

// Use Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));



// API key pk_3cc73cbaca404cf19d1fa4559f5f1671

// call create api
function call_api(finishedAPI, ticker){
    request('https://cloud.iexapis.com/stable/stock/' + ticker + '/quote?token=pk_3cc73cbaca404cf19d1fa4559f5f1671',{json: true}, (err,res, body)=>{
        if(err){return console.log(err);}
        if(res.statusCode === 200){
            // console.log(body);
            finishedAPI(body);
        };
    });
};

// Set handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set handlebars index GET routes
app.get('/', function (req, res) {
    call_api(function(doneAPI){
        res.render('home',{
            stock: doneAPI
        });
    }, "fb");
});

// Set handlebars index POST routes
app.post('/', function (req, res) {
    call_api(function(doneAPI){
        // posted_stuff = req.body.stock_ticker;
        res.render('home',{
            stock: doneAPI,
        });
    }, req.body.stock_ticker);
});

// Create about page route
// Set handlebars routes
app.get('/about.html', function (req, res) {
    res.render('about');
});
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{
    console.log("Server running on Port"+ PORT);
});