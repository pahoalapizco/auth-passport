const express = require('express');
const sesion = require('express-session');

const app = express();

app.use(sesion({
  resave: false, //no guarde la cookie cada que hace un cambio.
  saveUninitialized: false, 
  secret: 'my own secret!'
}));

app.get('/', (req, res) => {
  req.session.count = req.session.count ? req.session.count + 1 : 1;
  res.status(200).json({ hello: 'world', counter: req.session.count });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
