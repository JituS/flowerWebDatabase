var http = require('http');
var requestHandler = require('./routes.js');
// var server = http.createServer(requestHandler);
// server.listen(process.env.OPENSHIFT_NODEJS_PORT);

var express = require('express');
var app = express();
var http = require('http');

// app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002);
// app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");


http.createServer(requestHandler).listen(requestHandler.get('port') ,requestHandler.get('ip'), function () {
    console.log("✔ Express server listening at %s:%d ", app.get('ip'),app.get('port'));
    // server();
});

