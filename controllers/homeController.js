// controllers/homeController.js
const Setting = require('../models/setting');

// Get all settings
exports.getAllSettings = async (req, res) => {
    try {
        const settings = await Setting.find();
        res.render('home/index', { settings, title: 'OVA AROVA' });
    } catch (err) {
        res.status(500).send(err);
    }
};