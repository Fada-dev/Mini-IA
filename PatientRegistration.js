const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

// Endpoint for patient registration
router.post('/patients', async (req, res) => {
  try {
    const patientData = req.body;
    const existingPatient = await Patient.findOne({ phone: patientData.phone });

    if (existingPatient) {
      return res.status(400).json({ message: 'Patient already exists' });
    }

    const newPatient = new Patient(patientData);
    await newPatient.save();

    res.status(201).json(newPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
