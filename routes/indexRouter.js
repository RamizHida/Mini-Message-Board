const { Router } = require('express');

const indexRouter = Router();

// Sample messages mock data
const messages = [
  {
    id: 1,
    text: 'First Message',
    user: 'Stolen Dessert',
    added: new Date(),
  },
  {
    id: 2,
    text: 'Second Message',
    user: 'Johnny Bravo',
    added: new Date(),
  },
  {
    id: 3,
    text: 'Final Message',
    user: 'Scooby Doo',
    added: new Date(),
  },
];

let uniqueId = messages.length + 1;

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', messages: messages });
});

// handle post request coming from the form
indexRouter.post('/newMessage', (req, res) => {
  messages.push({
    id: uniqueId++,
    text: req.body.newMessage,
    user: req.body.Author,
    added: new Date(),
  });
  // redirect user to home page after submission
  res.status(200).redirect('/');
});

indexRouter.get('/message/:id', (req, res) => {
  const messageId = parseInt(req.params.id);

  const message = messages.find((message) => message.id === messageId);
  console.log(message);

  if (message) {
    res.render('message', { message: message });
  } else {
    // Render a "Not Found" page with a client-side redirect
    res.status(404).render('notFound', {
      message: 'The requested resource could not be found.',
      redirectTo: '/',
      delay: 5000, // 3 seconds delay for redirection
    });
  }
});

module.exports = indexRouter;
