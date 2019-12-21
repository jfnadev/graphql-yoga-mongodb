const mongoose = require('mongoose');

const schemaPosts = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  user_id: {
    type: Number,
    required: false,
  },
  body: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('posts', schemaPosts);
