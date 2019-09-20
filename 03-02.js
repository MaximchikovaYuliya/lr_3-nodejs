const http = require('http');
const url = require("url");

let fact = (num) => {
    if (num === 0) { return 1; }
    else { return num * fact(num - 1); }
}

http.createServer(function(request, response) {
    let request_url = request.url;
    if(url.parse(request_url).pathname === '/fact') {
        const current_url = new URL(request_url);
        const search_params = current_url.searchParams;
        const k = search_params.get('k');
        response.writeHead(200, {"Content-Type":"application/json; charset=utf-8"});
        response.end(JSON.stringify({k:k, fact: fact(k)}));
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/');