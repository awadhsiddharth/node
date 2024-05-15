const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Admin',
    database: 'mydb'
});

conn.connect((err) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log(`DB Connected!`);
    }

    var sql = 'INSERT INTO products(name) VALUES("Chocolate Heaven"),("Tasty Lemons"),("Vanilla Dreams");';
    conn.query(sql, (err, res) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log(res);
        }
    });

});
