var fs = require('fs');
var querystring = require('querystring');
var comments = require('./comments.js');
var express = require('express');
var app = express();

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

app.post('/comment',function(req,res,next){
	var data= '';
	req.on('data',function(chunk){
		data+=chunk;
	});
	req.on('end',function(){
		comments.add(querystring.parse(data));
		comments.getAll(res);
	});
});

app.use(express.static('./public'));

app.get('/comments.js',function(req,res,next){
	comments.getAll(res);
});

module.exports = app;