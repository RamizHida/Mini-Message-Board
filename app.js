const express = require('express');
const app = express();
require('dotenv').config();

// Import Routers
const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');

// Define Routes
app.use('/', indexRouter);
app.use('/newMessage', newMessageRouter);

// 404 Route handler
app.use((req, res) => {
  res
    .status(404)
    .send(
      '<h1>404 Not Found</h1><p>The resource you search does not yet exist</p>'
    );
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, (err) => {
  console.log(PORT);
  if (err) {
    console.error('Error starting the server ', err);
    return;
  }
  console.log('Server running on ', PORT);
});
