const express = require('express');

const app = express();

const graphqlHTTP = require('express-graphql');

const schema = require('./schema');

const open = require('open');

const port = process.env.PORT || 3000;

const cors = require('cors');

const mysql = require('mysql');

const config = require('./config');

const connection = mysql.createConnection({
  host: 'localhost',
  user: config.username,
  password: config.password,
  database: 'university',
});
app.use(cors());

app.get('/university_list', (req, res) => {
  const queryRes = (err, rows) => {
    const data = [];
    if (err) throw err;

    for (let i = 0; i < rows.length; i++) {
      data.push(rows[i].name);
    }

    res.json(data);
  };

  connection.query('SELECT name FROM university',
    queryRes);
});

/**
 * For test
 */
const connection2 = mysql.createConnection({
  host: 'localhost',
  user: config.username,
  password: config.password,
  database: config.database,
});

app.get('/company_list', (req, res) => {
  const queryRes = (err, rows) => {
    const data = [];
    if (err) throw err;

    for (let i = 0; i < rows.length; i++) {
      data.push(rows[i].name);
    }

    res.json(data);
  };

  connection2.query('SELECT name FROM cb_objects WHERE NOT (name = "")',
    queryRes);
});

// Test code ended
app
  .use('/graphql', cors(), graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true,
  }))
  .listen(3000, () => {
    console.log(`GraphQL server running on http://localhost:${port}/graphql`);
  });

// open(`http://localhost:${port}/graphql`);
