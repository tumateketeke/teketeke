var express = require('express');

var app = express();

var handlebars = require('express3-handlebars')
	.create({defaultLayout:'main'});
app.engine ('handlebars', handlebars.engine);
app.set('view engine','handlebars');


app.set('port', process.env.PORT || 4000);

app.use(express.static( __dirname + '/public'));
app.get('/', function(req,res){
	res.render('home');

});

app.get('/about',function(req,res){
	var randomToday =
	today[Math.floor( Math.random() * today.length)];
	res.render('about',{today : randomToday});
});

app.use (function(req,res){
	res.status(404);
	res.render('404');

});

app.use (function (err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');


})

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:') +
		app.get ('port') + ('; Press Ctrl +C to terminate');
})

var today = [
		"It's friday, Grab A Movie.",
		"It's Monday send Flowers.",
		"Never a better day to surprise someone with movie tickets than Tuesday!"
	];

