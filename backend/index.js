const express = require('express');
const mysql = require('mysql');

const app = express();

const database = mysql.createConnection({
    host: 'localhost',
    user: 'lega',
    password: 'lox',
    database: 'tenants'
});

database.connect((err) => {
    if(err){
        console.log(err);
    } else{
        console.log('mysql connected');
    }
})

app.get('/createTable', (req, res) => {
    let sql = 'CREATE TABLE tenants(id int AUTO_INCREMENT, name VARCHAR(255), primary KEY(id));';
    database.query(sql, (err, result) => {
        if(err){
            console.log(err);
            res.send(err);
        } else{
            console.log(result);
            res.send('tenants table created');
        }
    })
})

app.get('/removeTable', (req, res) => {
    let sql = 'DROP TABLE lox';
    database.query(sql, (err, result) => {
        if(err){
            console.log(err);
            res.send(err);
        } else{
            console.log(result);
            res.send('tenants table deleted');
        }
    })
})



app.listen('8008', () => {
    console.log('server started on port 8008');
});