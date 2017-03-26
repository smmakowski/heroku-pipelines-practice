var http = require('http');

//define port
const PORT = process.env.PORT || 8080; 

//setup request handler
function handleRequest(request, response) {
	if (request.method === 'GET'){
		response.end('GOT!')
	}


	response.end('It works!')
}

//create server
var server = http.createServer(handleRequest);

//create 
server.listen(PORT, function(){
	console.log('Server listening on http://localhost:' + PORT);
});