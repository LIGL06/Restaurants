var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');
var methodOverride = require('method-override');

var session_mid = require('./middleware/session');
var index = require('./routes/index');
var auth = require('./routes/auth');
var api = require('./routes/api');

var app = express();
var port = process.env.PORT || 8080

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser({
	name: 'RestaurantifySession',
	keys: ['0aa2954581642f9bef5285d890bc2b18','fc7ada869f2fdbd77d12ce98781e5679'],
	maxAge: 1 * 60 * 60 * 1000
}));
app.use(sassMiddleware({
	src: path.join(__dirname, 'public'),
	dest: path.join(__dirname, 'public'),
	outputStyle: 'compressed',
	indentedSyntax: true, // true = .sass and false = .scss
	sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/auth', auth);
app.use('/dashboard', session_mid);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.listen(port, function(error){
	if(error) console.log(error);
	console.log('Restaurantify listening...');
});
module.exports = app;
