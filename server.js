const express = require('express');
const app 		= express();

app.use('/static', express.static('public'));

app.set('views', __dirname + '/views')
app.set('view engine', 'pug');



app.listen(4500, function(){
	console.log('listening on port 4500')
});


app.get('/', function(req, res){
	res.render("index")
});

