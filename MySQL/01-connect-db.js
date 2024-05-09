// const mysql = require('mysql2');


// const con = mysql.createConnection({
//     host: 'localhost',
//     username: 'root',
//     password: 'Admin'
// });

// con.connect((err) => {
//     if (err) {
//         throw err;

//     } else {
//         console.log("DB Connected!");
//     }
// });

const mysql = require('mysql2');
 
// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Admin'
//   database: 'new_schema'
});
 
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});
