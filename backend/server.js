const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const cors = require('cors');

const mysql = require('mysql');

const config = require('./config');

const pool = mysql.createPool({
  host: config.host,
  user: config.username,
  password: config.password,
  database: config.database,
});

app.use(cors());

app.get('/university_list', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

    connection.query('SELECT name FROM university', (e, rows) => {
      const data = [];
      if (e) throw e;

      for (let i = 0; i < rows.length; i++) {
        data.push(rows[i].name);
      }
      connection.release();
      res.json(data);
    });
  });
});

app.get('/university/:uName', (req, res) => {
  const uName = req.params.uName;


  pool.getConnection((err, connection) => {
    connection.query(`SELECT * FROM university WHERE NAME = "${uName}";`,
      (e, rows) => {
        if (e) throw e;

        connection.release();
        res.json(rows[0]);
      });
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
