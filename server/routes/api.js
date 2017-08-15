var mysql = require('mysql');

var con = mysql.createConnection({
  host: "www.ajtechlab.com",
  user: "wwwajtec_ajtech",
  password: "f0A%iv$R5kBh",
  database: "wwwajtec_ajtechlab"
});


const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
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


