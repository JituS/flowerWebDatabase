var http = require('http');
var requestHandler = require('./routes.js');
var server = http.createServer(requestHandler);
server.listen(process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002, process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
