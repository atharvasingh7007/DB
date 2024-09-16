const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const sensorRoutes = require('./routes/sensorRoutes');
const app = express();
require('dotenv').config();
// MongoDB connection
mongoose.connect(process.env.MONGO_URL);

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', sensorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
