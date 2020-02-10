const express = require('express');
const sesion = require('express-session');
const { singToken } = require('./jwtAuth');

const app = express();

const SECRET = 'my own secret!'

app.use(sesion({
  resave: false, //no guarde la cookie cada que hace un cambio.
  saveUninitialized: false, 
  secret: SECRET
}));

app.get('/', (req, res) => {
  req.session.count = req.session.count ? req.session.count + 1 : 1;
  res.status(200).json({ hello: 'world', counter: req.session.count });
});

app.get('/login', (req, res) => {
  const token = singToken({ sub: { name: 'paho', action: 'Test'} }, SECRET);
  req.session.token = token;

  res.status(200).json({
    done: 'ok',
    token
  });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
