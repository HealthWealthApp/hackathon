var express = require('express'),
	app = express();

app.set('port', process.env.PORT || 3000);

// Static
app.use(express.static(__dirname + '/public'));

// set up handlebars view engine
var handlebars = require('express-handlebars').create({
	defaultLayout: 'main'
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Signup/Default
app.get('/', function(req, res) {
	res.render('signup');
});

// Homepage
app.get('/home', function(req, res) {
	res.render('home');
});

// Call
app.get('/call', function(req, res) {
	res.render('call');
});

// Profile
app.get('/call/profile', function(req, res) {
	res.render('profile');
});

// Map
app.get('/map', function(req, res) {
	res.render('map');
});

// Map
app.get('/map/active', function(req, res) {
	res.render('active');
});

// Appointment
app.get('/appointment', function(req, res) {
	res.render('appointment');
});

// Pharmacy
app.get('/pharmacy', function(req, res) {
	res.render('pharmacy');
});

// ER
app.get('/er', function(req, res) {
	res.render('er');
});

// 404 page
app.use(function(req, res) {
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

// 500 page
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function() {
	console.log('Express started on http://localhost:' +
		app.get('port') + '; press Ctrl-C to terminate.');
});