var	bodyParser = require('body-parser'),
	express = require('express'),
	cookieParser = require('cookie-parser'),
	cookieSession = require('cookie-session'),
	favicon = require('serve-favicon'),
	logger = require('morgan'),
	sassMiddleware = require('node-sass-middleware'),
	methodOverride = require('method-override'),
	mkdirp = require('mkdirp'),
	multer = require('multer'),
	dest = './public/uploads',
	path = require('path');
	storage = multer.diskStorage({
		destination: function(req, file, cb){
			mkdirp.sync(dest)
			cb(null, dest)
		}, filename: function(req, file, cb){
			cb(null, Date.now() + '.jpg')
		}
	})
	upload = multer({ storage: storage});

var session_mid = require('./middleware/session'),
	admin_mid = require('./middleware/admin'),
	api = require('./routes/api'),
	auth = require('./routes/auth'),
	comments = require('./routes/comments'),
	index = require('./routes/index'),
	offers = require('./routes/offers'),
	restaurants = require('./routes/restaurants'),
	users = require('./routes/users');

var app = express();
app.locals.moment = require('moment');
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
app.use(cookieParser());
app.use(cookieSession({
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

app.use('/auth', auth);
app.use('/', session_mid);
app.use('/', index);
app.use('/api', api);
app.use('/comments', comments);
app.use('/offers', admin_mid);
app.use('/offers', offers);
app.use('/restaurants', restaurants);
app.use('/users', users);

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
	res.render('error', {title: 'Restaurantify - Error'});
});

app.listen(port, function(error){
	if(error) console.log(error);
	console.log('Restaurantify listening...');
});
module.exports = app;
