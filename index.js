// Stock Market Portfolio App By Aniket

const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

// Set handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set handle bars routes
app.get('/', function (req, res) {
    res.render('home');
});
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{
    console.log("Server running on Port"+ PORT);
});