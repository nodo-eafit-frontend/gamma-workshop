const express = require('express');

const app = express();
const port = 3001;

// API
app.get('/', (req, res) => {
    res.send('Hello world');
  });
  
  app.listen(port, () => {
    console.log('Servidor corriendo... 😀');
  });