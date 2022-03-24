var msg=require('./file1')
var http=require('http')
console.log(`http://127.0.0.1:3001
is started`)

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'})
    res.end(msg)
}).listen(3001)
