const mongoose = require('mongoose');

const ItemsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  completed: {
    required: true
  }


});

module.exports = items = mongoose.model('items', ItemsSchema);