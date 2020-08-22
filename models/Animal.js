const mongoose = require('mongoose');

const AnimalSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  temperament: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default: 'https://www.placekitten.com/200/200',
  },
  in_foster: {
    type: Boolean,
    default: false,
  },
  adopted: {
    type: Boolean,
    default: false,
  },
  available: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('animal', AnimalSchema);
