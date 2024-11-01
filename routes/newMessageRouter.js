const { Router } = require('express');

const newMessageRouter = Router();

const title = 'New Message';

newMessageRouter.get('/', function (req, res) {
  res.render('form', { title: title });
});

module.exports = newMessageRouter;
