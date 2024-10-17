const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12737060',
  password: 'mLugmZtXpC',
  database: 'sql12737060',
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

module.exports = connection;
