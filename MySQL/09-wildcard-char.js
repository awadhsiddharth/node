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
    // a% means word starting from from a and having more letter ahead
    const sql = `SELECT * FROM employee WHERE name LIKE 'a%';`;
    // a%y means words starting with a and ending with y
    const sql1 = `SELECT * FROM employee WHERE name LIKE 'a%';`;

    
    conn.query(sql, sql1, (err, res) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log(res);
        }
    });

});