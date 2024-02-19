
const mysql = require('mysql2');

// create a new MySQL connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin'
    //   database: 'new_schema'
});

conn.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL database:', error);
        // throw error;
    } else {
        console.log(`DB Connected!`);
    }
    conn.query("CREATE DATABASE mydb", (err, result) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log(`Database Created!`);
        }
    });
});