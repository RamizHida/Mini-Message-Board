const { Router } = require('express');

const newMessageRouter = Router();

newMessageRouter.get('/', function (req, res) {
  res.send('New Message Router');
});

module.exports = newMessageRouter;
