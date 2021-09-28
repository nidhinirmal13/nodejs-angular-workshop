var http = require("http");
var http = http.createServer(function(req,res)
{

    res.end('hello world in nodejsss\n');
}).listen(3000);console.log("server is started at http://127.0.0.1:3000");