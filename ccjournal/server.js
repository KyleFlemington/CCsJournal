const express = require('express');
const app 		= express();


app.listen(4500, function(){
	console.log('listening on port 4500')
});


app.get('/', function(req, res){
	res.send("hello redux and react")
});

