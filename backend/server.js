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

pool.getConnection((err) => {
  if (err) throw err;

  console.log(`Database ${config.host} ${config.database} connected!`);
});

app.use(cors());

app.get('/university_list', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

    connection.query('SELECT name FROM University', (e, rows) => {
      const data = [];
      if (e) throw e;

      for (let i = 0; i < rows.length; i += 1) {
        data.push(rows[i].name);
      }
      connection.release();
      res.json({ university_list: data });
    });
  });
});

app.get('/university/:uName', (req, res) => {
  const uName = req.params.uName;


  pool.getConnection((err, connection) => {
    connection.query(`SELECT * FROM University WHERE name = "${uName}";`,
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
