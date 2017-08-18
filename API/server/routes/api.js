var mysql = require('mysql');
var connection = require('../../config/database.js');
var con = mysql.createConnection(connection.Form_connectionString);


const express = require('express');
const router = express.Router();


router.get('/getform', function(req, res) {
    let content = ['tests']
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(content);
    res.end();
});

router.post('/postform', function(req, res) {    

 var sql = "INSERT INTO ContactMeForm (name, email, number, message) VALUES ?";
var values = [req.body.data]
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
  });
});

module.exports = router;


