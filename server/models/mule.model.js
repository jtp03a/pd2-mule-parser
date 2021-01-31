const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const muleModel = new Schema({
  name: { type: String, required: true },
  items: { type: mongoose.Mixed }
});

module.exports = mongoose.model('mule', muleModel);