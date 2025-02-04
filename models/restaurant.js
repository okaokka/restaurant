// models/restaurant.js
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cuisine: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);