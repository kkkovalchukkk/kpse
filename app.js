const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');

const urlEncodedParser = bodyParser.urlencoded({
  extended: false
});

/* ``````````````` База данных ``````````````` */
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'u1517770_default',
  database: 'u1517770_default',
  password: 'dYJj33xBebOB6s6g'
});
/* ``````````````````````````````````````````` */

connection.connect(function(err) {
  if (err) {
    return console.error('Ошибка: ' + err.message);
  } else {
    console.log('Подключение к базе данных успешно установлено');
  }
});

// Post запрос
app.post('/index.html', urlEncodedParser, function(req, res) {
  if (!req.body) return res.status(400);
  console.log(req.body);

  const fname = req.body.fname;
  const lname = req.body.lname;
  const sname = req.body.sname;
  const email = req.body.email;
  const numberphone = req.body.numberphone;
  const dolch = req.body.dolch;

  var sql = "INSERT INTO 'employees' ("
    + "fname,lname,sname,email,numberphone,dolch) VALUES("
    + "'" + fname + "',"
    + "'" + lname + "',"
    + "'" + sname + "',"
    + "'" + email + "',"
    + "'" + numberphone + "',"
    + "'" + dolch + "'"
    + ')';

  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log('add');
  });
});

app.listen(3000, function() {
  console.log('Work on port: 3000');
});