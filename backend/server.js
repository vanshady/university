const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const cors = require('cors');

const mysql = require('mysql');

const config = require('./config');

const connection = mysql.createConnection({
  host: 'localhost',
  user: config.username,
  password: config.password,
  database: config.database,
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

app.get('/university/:uName', (req, res) => {
  const uName = req.params.uName;

  const queryRes = (err, rows) => {
    if (err) throw err;
    res.json(rows[0]);
  };
  connection.query(`SELECT * FROM university WHERE NAME = "${uName}";`,
    queryRes);
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});
