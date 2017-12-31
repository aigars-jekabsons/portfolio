var mysql = require('mysql');
var connection = require('../../config/database.js');
const express = require('express');
const router = express.Router();
var pool = mysql.createPool(connection.Form_connectionString);

var jsonfile = require('jsonfile')

/*HTTP GET REQUESTS*/

//Sending content to Front End
router.get('/getformcontent', function(req, res) {
 pool.getConnection(function(err, connection) {
  var conactFormData = [];
  var queryString = 'SELECT * FROM ContactMeForm';
  connection.query(queryString, function (error,rows, results, fields) {
    connection.destroy();    
    if (error) throw error;
    for (var i in rows) {conactFormData.push(rows[i]);}
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(conactFormData);
    res.end();
    
  });
});
});




/*HTTP POST REQUESTS*/

router.post('/populateContent', function(req, res) {
pool.getConnection(function(err, connection) {
  var DBField = [req.body.data] 
  var ContentObject = [];
  var queryString = 'SELECT * FROM '+DBField+'';
  connection.query(queryString, function (error, rows, fields, results) {
    connection.destroy();        
    if (error) throw error;
    for (var i in rows) {ContentObject.push(rows[i]);}
    res.send(ContentObject);
    res.end();
  });
});

});


//Change status replied status
router.post('/changeRepliedStatus', function(req, res) {
      pool.getConnection(function(err, connection) {
        var ChangeID = [req.body.data] 
        var sql = "UPDATE `ContactMeForm` SET Replied ='Yes' WHERE ID = "+ChangeID+";";
        connection.query(sql, function (error, results, fields) {
          connection.destroy();
          if (error) throw error;
        });
      });
      res.send('Entry has been deleted');            
      res.end();
});
//Deletes an entry
router.post('/DeleteEntry', function(req, res) {
      pool.getConnection(function(err, connection) {
        var ChangeID = [req.body.data] 
        var sql = "DELETE FROM `ContactMeForm` WHERE ID = "+ChangeID+";";
        connection.query(sql, function (error, results, fields) {
          connection.destroy();
          if (error) throw error;
        });
      });
      res.send('Entry has been deleted');      
      res.end();

});




router.post('/postform', function(req, res) {
    pool.getConnection(function(err, connection) {
      var sql = "INSERT INTO ContactMeForm (name, email, number, message) VALUES ?";
      var values = [req.body.data]
      connection.query(sql, [values], function (error, results, fields) {
        connection.destroy();
        if (error) throw error;
      });
    });
      res.send('Form has been submitted');
      res.end();
});






//Generating JSON File.
router.post('/GenerateJSON', function(req, res) {
  var file = 'data.json'
  var obj = {names: 'Jonathan'}
  
  jsonfile.writeFileSync(file, obj)
  res.end('JSON has been generated');
});

//As the hosting where I have hosted my application allows for the connection to be max 5 min long
// I have created script that reconnects every 3 minutes.


module.exports = router;



