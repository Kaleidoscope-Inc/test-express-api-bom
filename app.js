const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json([]);
});

app.post('/users', (req, res) => {
  res.status(201).json({});
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
