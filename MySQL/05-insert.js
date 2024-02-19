const mysql = require('mysql2');
const con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Admin',
    database: 'mydb'
});

con.connect((err) => {
    if (err) {
        console.error('Error while connecting to database!');
    }
    else {
        console.log(`DB CONNECTED!`);
    }

    var sql = `INSERT INTO employee (name, address) VALUES ('Ananya Singh', 'Andrewsganj'),('Shreya Sinha','Model Town');`;
    con.query(sql, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Data Inserted!`);
        }
    });
});