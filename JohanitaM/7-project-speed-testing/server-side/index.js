const express = require('express');
const fs = require('fs');

const app = express();
const port = 3001;

// API GET
app.get('/', (req, res) => {
  // llamar a la bd (json)

  fs.readFile('../data/inicio.json', (err, data) => {
    if (err) {
      res.statusCode(400);
    } else {
      const elDato = JSON.parse(data);
      res.status(200).send(elDato);
    }
  });
});

app.listen(port, () => console.log('Servidor corriendo... 😀'));