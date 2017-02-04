const express 		= require('express');
const app 				= express();
const bodyParser	= require('body-parser');
const r 					= require('rethinkdb');

app.use('/static', express.static('public'));
app.use(bodyParser());

app.set('views', __dirname + '/views')
app.set('view engine', 'pug');




app.listen(4500, function(){
	console.log('listening on port 4500')
});


app.get('/', function(req, res){
	res.render("index")
});


var connection = null;
r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
})


app.post('/index', function(req, res){
	var obj = {};
	console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);
});

