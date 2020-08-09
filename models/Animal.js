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
    required: true,
    default: false,
  },
  adopted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model('animal', AnimalSchema);
