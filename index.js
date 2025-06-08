const express = require('express');
const app = express();
const port = process.env.PORT;


// Importing hardcoded travel data
const destinations = require('./data/destinations');

// Define API endpoint
app.get('/api/destinations', (req, res) => {
  res.json({
    status: "success",
    data: destinations
  });
});

app.get('/', (req, res) => res.send('Hello from Elastic Beanstalk!'));

app.listen(port, () => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
});
