// models/setting.js
const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
    restaurantnName: { type: String, required: true },
    title: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('Setting', settingSchema);