// routes/restaurantRoutes.js
const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const homeController = require('../controllers/homeController');

// Define routes
router.get('/', homeController.getAllSettings);
router.get('/add', restaurantController.getAddRestaurants);
router.post('/add', restaurantController.addRestaurant);
router.get('/edit/:id', restaurantController.editRestaurant);
router.post('/edit/:id', restaurantController.updateRestaurant);
router.get('/delete/:id', restaurantController.deleteRestaurant);

module.exports = router; // Ensure you are exporting the router