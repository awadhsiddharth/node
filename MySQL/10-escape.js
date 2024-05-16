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
    // Escape the address value:
    var sql = 'SELECT * FROM employee WHERE address = ' + mysql.escape(add);
    conn.query(sql, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(res);
        }
    })
});
