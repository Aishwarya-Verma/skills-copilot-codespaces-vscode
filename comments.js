// Create web server
// Create web server
// Create a route for '/skills'
// Send a JSON response with an array of 3 skills

const express = require('express');
const app = express();

app.get('/skills', (req, res) => {
  res.json([
    'HTML',
    'CSS',
    'JavaScript'
  ]);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
