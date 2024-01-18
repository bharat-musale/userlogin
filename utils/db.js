const mysql = require('mysql');

const connection = mysql.createConnection({
    user: "root",
    password: "manager",
    host: "localhost",
    port: 3306,
    database: "users",
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;
