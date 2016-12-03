const Sequelize = require('sequelize');

const path = require('path');

// Setting up the config
const config = require('./config');

const sequelize = new Sequelize('university',
  config.username,
  config.password,
  config.options
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }, (err) => {
    console.log('Unable to connect to the database:', err);
  });

// Models
const University = sequelize.import(path.join(__dirname, '/models/university'));

module.exports = {
  University,
};
