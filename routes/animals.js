const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Animal = require('../models/Animal');

// @route       GET api/contacts
// @desc        Get all contacts belonging to user
// @access      Private
router.get('/', auth, async (req, res) => {
  try {
    // Sort user's contacts by most recent
    const animals = await Animal.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(animals);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
