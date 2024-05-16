var myd = require('mysql2');

const conn = myd.createConnection({
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

    var sql = `(Select * FROM employee WHERE name="Aparna Chaudhary")`;
    conn.query(sql, (err, res) => {
        console.log(res);
    });
});
