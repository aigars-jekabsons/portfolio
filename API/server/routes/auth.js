//Inject environments 
var environments = require('../../config/environments.js');
let LoginStatus = false;
module.exports = function(app, passport) {
   // =====================================
   // HOME PAGE (with login links) ========
   // =====================================
   // =====================================
   // LOGIN ===============================
   // =====================================
   // show the login form
   app.get('/login', function(req, res) {
	   // render the page and pass in any flash data if it exists
	   res.render('login.ejs', { message: req.flash('loginMessage') });
   });

   // process the login form
   app.post('/login', passport.authenticate('local-login', {
		   successRedirect : '/a-panel', // redirect to the secure profile section
		   failureRedirect : '/login', // redirect back to the signup page if there is an error
		   failureFlash : true // allow flash messages
	   }),
	   function(req, res) {
		   console.log("hello");
		   if (req.body.remember) {
			 req.session.cookie.maxAge = 3 * 60 * 3;
		   } else {
			 req.session.cookie.expires = false;
		   }
	   res.redirect('/');
   });

   // =====================================
   // SIGNUP ==============================
   // =====================================
   // show the signup form
   app.get('/signup', function(req, res) {
	   // render the page and pass in any flash data if it exists
	   res.render('signup.ejs', { message: req.flash('signupMessage') });
   });

   // process the signup form
   app.post('/signup', passport.authenticate('local-signup', {
	   successRedirect : environments.CMSenvironement, // redirect to the secure profile section
	   failureRedirect : '/signup', // redirect back to the signup page if there is an error
	   failureFlash : true // allow flash messages
   }));

   // =====================================
   // PROFILE SECTION =========================
   // =====================================
   // we will want this protected so you have to be logged in to visit
   // we will use route middleware to verify this (the isLoggedIn function)
   app.get('/profile', loggedIn, function(req, res) {
	   
	   res.render('profile.ejs', {
		   _environment : environments.CMSenvironement,
		   successRedirect  :  environments.CMSenvironement, // redirect to the secure profile section
		   failureRedirect : '/login', // redirect back to the signup page if there is an error
		   failureFlash : true // allow flash messages
	   });
	   
   });
   //Check LOGINSTATUS 
   app.get('/checkstatus' , function(req, res) {			
	   LoginStatus = req.isAuthenticated();
	   console.log(LoginStatus)
       console.log(req.isAuthenticated())
	   let content = [LoginStatus]
	   res.header("Access-Control-Allow-Origin", "*");
	   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	   res.send(content);
	   res.end();
   });
   // =====================================
   // LOGOUT ==============================
   // =====================================
   app.get('/logout', function(req, res) {
	   req.logout();
	   res.redirect('/');
   });
;

// route middleware to make sure
function isLoggedIn(req, res, next) {
   // if user is authenticated in the session, carry on

}


function loggedIn(req, res, next) {
   if (req.user) {
	   next();
   } else {
	   res.redirect('/login');
   }
}

}