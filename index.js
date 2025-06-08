const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // fallback to 8080 for local testing

// Importing hardcoded travel data
const destinations = require('./data/destinations');

// Define API endpoint
app.get('/api/destinations', (req, res) => {
  res.json({
    status: "success",
    data: destinations
  });
});

app.get('/', (req, res) => res.send('Hello from Elastic Beanstalk!!V!'));

// Only listen ONCE
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});