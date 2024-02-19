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
    var sql = 'DELETE FROM employee WHERE address= "Mountain 21" ';
    conn.query(sql, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Numbers of records deleted : ` + res.affectedRows);
        }
    });
});