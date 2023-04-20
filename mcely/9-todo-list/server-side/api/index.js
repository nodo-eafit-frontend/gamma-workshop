require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const express = require('express');
const api = express.Router();
const { TASKS_PATH } = process.env;
const jsonReader = require('../utils/json-reader');

api.get('/tasks', (req, res) => {
  fs.readFile(TASKS_PATH, (err, data) => {
    if (err) {
      const msgError = 'Error reading file: ' + err;
      console.error(msgError);
      res.status(400).send(msgError);
    } else {
      const tasks = JSON.parse(data);

      res.status(200).send(tasks);
    }
  });
});

api.put('/task', (req, res) => {
  const { description } = req.body;

  jsonReader(TASKS_PATH, (err, data) => {
    if (err) {
      const msgError = 'Error reading file: ' + err;
      console.error(msgError);
      res.status(400).send(msgError);
    }

    const { tasks } = data;
    const id = uuidv4();
    const newTask = {
      id,
      description,
      isDone: false,
    };

    tasks.push(newTask);

    fs.writeFile(TASKS_PATH, JSON.stringify({ tasks }), (err) => {
      if (err) {
        const msgError = 'Error writing file: ' + err;
        console.error(msgError);
        res.status(400).send(msgError);
      }

      console.log({ id });

      res.status(200).send({ id });
    });
  });
});

api.post('/task/:id', (req, res) => {
  const { id } = req.params;
  const { description, isDone } = req.body;

  jsonReader(TASKS_PATH, (err, data) => {
    if (err) {
      const msgError = 'Error reading file: ' + err;
      console.error(msgError);
      res.status(400).send(msgError);
    }

    const { tasks } = data;
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (description) tasks[taskIndex].description = description;
    if (typeof isDone === 'boolean') tasks[taskIndex].isDone = isDone;

    fs.writeFile(TASKS_PATH, JSON.stringify({ tasks }), (err) => {
      if (err) {
        const msgError = 'Error writing file: ' + err;
        console.error(msgError);
        res.status(400).send(msgError);
      }

      res.sendStatus(200);
    });
  });
});

api.delete('/task/:id', (req, res) => {
  const { id } = req.params;

  jsonReader(TASKS_PATH, (err, data) => {
    if (err) {
      const msgError = 'Error reading file: ' + err;
      console.error(msgError);
      res.status(400).send(msgError);
    }

    console.log({ data });

    const { tasks } = data;
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex > -1) {
      tasks.splice(taskIndex, 1);
    }

    fs.writeFile(TASKS_PATH, JSON.stringify({ tasks }), (err) => {
      if (err) {
        const msgError = 'Error writing file: ' + err;
        console.error(msgError);
        res.status(400).send(msgError);
      }

      res.sendStatus(200);
    });
  });
});

module.exports = api;
