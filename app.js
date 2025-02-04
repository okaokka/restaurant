// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const restaurantRoutes = require('./routes/restaurantRoutes'); // Ensure this path is correct
const app = express();

mongoose.connect('mongodb://localhost:27017/restaurantDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use the restaurant routes
app.use('/', restaurantRoutes); // This should be correct

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});