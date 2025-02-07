// controllers/restaurantController.js
const Restaurant = require('../models/restaurant');

// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.render('index', { restaurants });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getAddRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.render('add', { restaurants });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Add a new restaurant
exports.addRestaurant = async (req, res) => {
    const { name, cuisine, location, rating } = req.body;
    const restaurant = new Restaurant({ name, cuisine, location, rating });
    try {
        await restaurant.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err);
    }
};

// Edit a restaurant
exports.editRestaurant = async (req, res) => {
    const { id } = req.params;
    try {
        const restaurant = await Restaurant.findById(id);
        res.render('edit', { restaurant });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update a restaurant
exports.updateRestaurant = async (req, res) => {
    const { id } = req.params;
    const { name, cuisine, location, rating } = req.body;
    try {
        await Restaurant.findByIdAndUpdate(id, { name, cuisine, location, rating });
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err);
    }
};

// Delete a restaurant
exports.deleteRestaurant = async (req, res) => {
    const { id } = req.params;
    try {
        await Restaurant.findByIdAndDelete(id);
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err);
    }
};