var http=require("http")
var request = request("request")
http.createServer(function(request,response){
    //http 头部
response.end("2512121")

}).listen(8888);
console.log("server runing at http://127.0.0.1:8888/")
