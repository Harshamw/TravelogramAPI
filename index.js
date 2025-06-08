const express = require('express');
const app = express();
const PORT = 3000;

// Importing hardcoded travel data
const destinations = require('./data/destinations');

// Define API endpoint
app.get('/api/destinations', (req, res) => {
  res.json({
    status: "success",
    data: destinations
  });
});

app.listen(PORT, () => {
  console.log(`🌍 Travelogram API is running on http://localhost:${PORT}`);
});
