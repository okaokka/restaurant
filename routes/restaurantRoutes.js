// routes/restaurantRoutes.js
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Define routes
router.get('/', restaurantController.getAllRestaurants);
router.post('/add', restaurantController.addRestaurant);
router.get('/edit/:id', restaurantController.editRestaurant);
router.post('/edit/:id', restaurantController.updateRestaurant);
router.get('/delete/:id', restaurantController.deleteRestaurant);

module.exports = router; // Ensure you are exporting the router