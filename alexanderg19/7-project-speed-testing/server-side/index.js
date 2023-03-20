const express = require('express');
const router = require('./router');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(router);
app.use(cors);
app.listen(port, () => console.log(`Servidor corriendo puerto ${port} ... 😀`));