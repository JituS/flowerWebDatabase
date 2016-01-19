var http = require('http');
var requestHandler = require('./routes.js');
var server = http.createServer(requestHandler);
server.listen(process.env.OPENSHIFT_NODEJS_PORT);

