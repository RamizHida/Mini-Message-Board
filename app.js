const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello');
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, (err) => {
  if (err) {
    console.log('Error starting the server ', err);
    return;
  }
  console.log('Server running on ', PORT);
});
