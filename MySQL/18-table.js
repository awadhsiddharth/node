const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin',
    database:'mydb'
});

conn.connect((err) => {
    if (err) {
        console.error('Error while connecting');
    }
    else {
        console.log("DB CONNECTED!");
    }

    const sql = "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name varchar(255))";
    conn.query(sql, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Table created!`);
        }
    })
});