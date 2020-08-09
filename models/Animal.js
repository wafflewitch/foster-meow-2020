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
    unique: true,
  },
  temperament: {
    type: String,
    required: true,
    default: 'playful',
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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('animal', AnimalSchema);
