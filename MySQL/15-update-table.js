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

    const sql = 'UPDATE employee SET address ="Hudco Place" WHERE address ="Andrewsganj"';
    // const sql1 = "Select * from employee where address ='Andrewsganj'";
    conn.query(sql, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(res);
        }
    });
});
