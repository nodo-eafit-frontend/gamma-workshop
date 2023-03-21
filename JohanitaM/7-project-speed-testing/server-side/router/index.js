const fs = require('fs');
const express = require('express');
const router = express.Router();

const homePagePath = './database/page-structure/home-page.json';

router.get('/', (req, res) => {
  fs.readFile(homePagePath, (err, data) => {
    if (err) {
      res.statusCode(400);
    } else {
      const elDato = JSON.parse(data);

      setTimeout(() => {
        res.status(200).send(elDato);
      }, 5000);
    }
  });
});

module.exports = router;  //Esxportar el elemento completo
