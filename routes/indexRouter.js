const { Router } = require('express');

const indexRouter = Router();

// Sample messages mock data
const messages = [
  {
    text: 'First Message',
    user: 'Stolen Dessert',
    added: new Date(),
  },
  {
    text: 'Second Message',
    user: 'Johnny Bravo',
    added: new Date(),
  },
  {
    text: 'Final Message',
    user: 'Scooby Doo',
    added: new Date(),
  },
];

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', messages: messages });
});

indexRouter.post('/newMessage', (req, res) => {
  messages.push({
    text: req.body.newMessage,
    user: req.body.Author,
    added: new Date(),
  });
  res.status(200).redirect('/');
});

module.exports = indexRouter;
