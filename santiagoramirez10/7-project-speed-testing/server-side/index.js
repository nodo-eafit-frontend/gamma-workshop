const express = require('express');
//const cors = require("cors");
const router = require('./router');

const app = express();
const port = 3001;

app.use(router);
//app.use(cors())


app.listen(port, () => console.log(`Servidor corriendo puerto ${port} ..... 😀`));
