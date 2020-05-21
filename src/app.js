const express = require('express');
const mongosse = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const routes = require('./routes');


dotenv.config();
const { MONGO_URL } = process.env;

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
    mongosse.connect(MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
