const express = require('express');
const router = express.Router();
const Encounter = require('../models/encounter');

router.post('/encounters', async (req, res) => {
  try {
    const encounterData = req.body;
    const newEncounter = new Encounter(encounterData);
    await newEncounter.save();

    res.status(201).json(newEncounter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
