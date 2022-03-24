var http=require('http');
var msg=`<h1>Welcome To Node JS DEMO Page </h1>`
console.log(`Server htttp://127.0.0.1:3000
is Started`)
http.createServer(function(req,res){

    res.writeHead(200,{'Content-type':'text/html'})
    res.end(msg)

}).listen(3000);
