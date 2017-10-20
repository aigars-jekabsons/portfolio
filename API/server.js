// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const api = require('./server/routes/api');
const authenticate = require('./server/routes/auth');
// Get our API routes
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var passport = require('passport');
var flash    = require('connect-flash');
var app = express();
var port = process.env.PORT || '3000';
var timeout = require('connect-timeout');
require('./config/passport')(passport);

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', api);
app.use(timeout('1s'));
app.set('port', port);

require('./server/routes/auth.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);

app.use(express.static(path.join(__dirname, 'web')));

app.use("/styles",  express.static(__dirname + '/web/stylesheets'));
app.use("/scripts", express.static(__dirname + '/web/javascripts'));
app.use("/images",  express.static(__dirname + '/web/images'))

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/web/index.html');
    
});




app.use(express.static(path.join(__dirname, 'cms')));

app.use("/styles",  express.static(__dirname + '/cms/stylesheets'));
app.use("/scripts", express.static(__dirname + '/cms/javascripts'));
app.use("/images",  express.static(__dirname + '/cms/images'))

app.get('/a-panel', function(req, res) {
    res.sendFile(__dirname+'/cms/index.html');
    
});

console.log('The magic happens on port ' + port);