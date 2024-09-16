const SensorData = require('../models/SensorData');

exports.saveSensorData = async (req, res) => {
  const { temperature, moisture } = req.body;

  try {
    const newSensorData = new SensorData({ temperature, moisture });
    await newSensorData.save();
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save data' });
  }
};

exports.getSensorData = async (req, res) => {
  try {
    const data = await SensorData.find().sort({ timestamp: -1 }).limit(10); // Fetch recent data
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
