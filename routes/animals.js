const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Animal = require('../models/Animal');

// @route       GET api/animals
// @desc        Get all animals belonging to user
// @access      Private
router.get('/', async (req, res) => {
  try {
    // Sort user's animals by most recent
    const animals = await Animal.find({
      name: { $exists: true },
    }).sort({
      date: -1,
    });
    res.json(animals);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route       POST api/animals
// @desc        Add an animal to the database
// @access      Private
router.post(
  '/',
  // [
  //   check('name', 'Name is required').not().isEmpty(),
  //   check('age', 'Age is required').not().isEmpty(),
  //   check('temperament', 'Temperament is required').not().isEmpty(),
  //   check('image', 'Image is required').not().isEmpty(),
  // ],
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    const { name, age, temperament, image } = req.body;

    try {
      // Create an animal instance
      const newAnimal = new Animal({
        name,
        age,
        temperament,
        image,
      });

      const animal = await newAnimal.save();

      res.json(animal);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route       PUT api/animals/:id
// @desc        Update an animal
// @access      Public
router.put('/:id', auth, async (req, res) => {
  console.log(req.body);

  const { available, in_foster, adopted, user } = req.body;

  // Build Animal object
  const animalFields = {
    available: available,
    in_foster: in_foster,
    adopted: adopted,
    user: user,
  };

  try {
    let animal = await Animal.findById(req.params.id);

    if (!animal) return res.status(404).json({ msg: 'Animal not found.' });

    // Make sure User owns Contact
    // if (animal.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'Not authorized' });
    // }

    animal = await Animal.findByIdAndUpdate(
      req.params.id,
      { $set: animalFields },
      { new: true } // This returns the new object instead of old.
    );

    res.json(animal);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
