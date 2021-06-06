// Stock Market Portfolio App By Aniket

const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

// Set handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set handlebars routes
app.get('/', function (req, res) {
    res.render('home');
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