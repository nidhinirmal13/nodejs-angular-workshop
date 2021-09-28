var http = require("http");
const { clearScreenDown } = require("readline");
var a = 10;
var b = 20;
var c = a+b;
var mymsg = "a value is" + a +"b value is" + b +"sum is" + c;
http.createServer(function(req,res)
{
    res.end("hello world in nodejs\n"+ mymsg);
}).listen(3000);
console.log("server is started at http://127.0.0.1:3000");