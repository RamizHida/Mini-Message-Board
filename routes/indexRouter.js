const { Router } = require('express');

const indexRouter = Router();

// Sample messages mock data
const messages = [
  {
    text: 'First Message',
    user: 'Stolen Dessert',
    time: new Date(),
  },
  {
    text: 'Second Message',
    user: 'Johnny Bravo',
    time: new Date(),
  },
  {
    text: 'Final Message',
    user: 'Scooby Doo',
    time: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', messages: messages });
});

module.exports = indexRouter;
