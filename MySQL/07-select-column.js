const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin',
    database: 'mydb'
});


conn.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Connected!");
    }

    var sql = `SELECT name, id FROM employee`;
    conn.query(sql, (err, res, fields) => {
        if (err) {
            console.error(err);
        } else {
            console.log(res);
        }
        console.log(fields);
    });
});
