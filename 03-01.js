let http = require('http');
let state = 'norm';

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1>' + state + '</h1>');
}).listen(5000);

console.log('Server running at http://localhost:5000/');