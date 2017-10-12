var mysql = require('mysql');
var connection = require('../../config/database.js');
const express = require('express');
const router = express.Router();
var con = mysql.createConnection(connection.Form_connectionString);
var jsonfile = require('jsonfile')
con.connect();


//Sending content to Front End
router.get('/getformcontent', function(req, res) {
  var conactFormData = [];
  var queryString = 'SELECT * FROM ContactMeForm';
   con.query(queryString, function(err, rows, fields) {
     if (err) throw err;
     for (var i in rows) {conactFormData.push(rows[i]);}
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     res.send(conactFormData);
     res.end();
 });
});
//Change status replied status
router.post('/changeRepliedStatus', function(req, res) {
  var ChangeID = [req.body.data] 
    var sql = "UPDATE `ContactMeForm` SET Replied ='Yes' WHERE ID = "+ChangeID+";";
      con.query(sql, function (err, result){
        if (err) throw err
      });
      res.send('Status has been changed');
      res.end();
});
//Deletes an entry
router.post('/DeleteEntry', function(req, res) {
  var ChangeID = [req.body.data] 
    var sql = "DELETE FROM `ContactMeForm` WHERE ID = "+ChangeID+";";
      con.query(sql, function (err, result){
        if (err) throw err
      });
      res.send('Entry has been deleted');
      res.end();
});




router.post('/postform', function(req, res) {
    var sql = "INSERT INTO ContactMeForm (name, email, number, message) VALUES ?";
    var values = [req.body.data] 
      con.query(sql, [values], function (err, result){
      });
      res.send('Form has been submitted');
      res.end();
});


//As the hosting where I have hosted my application allows for the connection to be max 5 min long
// I have created script that reconnects every minute.

setInterval(function () {
  con.end(function(){
      con = mysql.createConnection(connection.Form_connectionString);
      con.connect();
  });
}, 180000);

//Generating JSON File.
router.post('/GenerateJSON', function(req, res) {
  var file = 'data.json'
  var obj = {names: 'Jonathan'}
  
  jsonfile.writeFileSync(file, obj)
  res.end('JSON has been generated');
});


module.exports = router;



