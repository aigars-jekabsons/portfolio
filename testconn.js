//https://www.w3schools.com/nodejs/nodejs_mysql_where.asp

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "www.ajtechlab.com",
  user: "wwwajtechlab",
  password: "Hus0RLGVqAsb",
  database: "wwwajtec_testing"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 //Creating a table
 //var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
 //Injecting information into the table
 //var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
 
//    con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Record inserted");
//   });
//Injecting big amount of information
//    var sql = "INSERT INTO customers (name, address) VALUES ?";
//   var values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Record inserted");
//     console.log(result)
//   });
//Reading whole information from a table
  //con.query("SELECT * FROM customers", function (err, result, fields) {
//Reading information partially
 //   con.query("SELECT name, address FROM customers", function (err, result, fields) {
//look for specific record inside of a DB
//con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
//find record that starts with s
    con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
    if (err) throw err;
    console.log(result);
    //console.log(result[2].address);
  });
});