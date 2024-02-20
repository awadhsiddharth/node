var mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin',
    database: 'mydb'
});

conn.connect((err) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log('Db Connected!');
    }
    var sql = "SELECT employee.name AS employee, products.name AS favorite FROM employee JOIN products ON employee.address = products.id";
    conn.query(sql, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(res);
        }
    });
});