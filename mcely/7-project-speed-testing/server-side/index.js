const express = require('express');

const app = express();
const port = 3001;

// API
app.get('/', (req, res) => {
  // Aquí obtener info del json
});

app.listen(port, () => {
  console.log('Servidor corriendo... 😀');
});
