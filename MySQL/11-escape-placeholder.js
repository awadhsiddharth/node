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
    var add = 'Mountain 21';
    var name = 'Amy';
    var sql = 'SELECT * FROM employee WHERE name = ? OR address = ?';
    conn.query(sql, [name, add], (err, res) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log(res);
        }
    });
});