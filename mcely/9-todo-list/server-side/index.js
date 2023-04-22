require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const api = require("./api");

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(bodyParser.json());

app.use(api);

app.listen(PORT, () => console.log(`Servidor corriendo puerto ${PORT} ... 😀`));
