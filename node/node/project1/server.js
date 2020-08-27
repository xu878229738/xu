let http = require('http'); 
let qs = require('querystring'); 
var url = require('url')    //可以做路由判断 是那种  比如  /admin/dd  或者/ddd  什么的
//  post 请求
let server = http.createServer(function(req, res) {
 
 let body = ''; // 一定要初始化为"" 不然是undefined
 req.on('data', function(data) {
  body += data; // 所接受的Json数据
 });
 req.on('end', function() { 
  res.writeHead(200, { // 响应状态
   "Content-Type": "text/plain;charset=utf-8", // 响应数据类型  utf8
   'Access-Control-Allow-Origin': '*', // 允许任何一个域名访问
  });

  var pathname = url.parse(req.url).pathname;
  console.log(pathname)
  if(pathname=="/admin"){
    res.write("我是路由/admin");
    res.write("<hr>");
    res.write("<br>");
  }else{
    res.write("我是路由/ddd");
    res.write("<hr>")
    res.write("<br>")
  }

  if(qs.parse(body).name == 'food') {
      var jsons = {
        status:"1",
       data:{"哈哈":"嘻嘻"}
      }
     
      var cct=2
      var ss ='<div class="top">哈哈我是div标签<span>我是span标签</span></div>'+cct+'<div>拼接的活数据</div>'
   res.write(ss);
  } else {
   var jsons = {
  status:1,
  data:{s:1,d:2}
   }



   res.write(JSON.stringify(jsons));
  } 
 
  res.end();
 }); 
});
 
server.listen(7070);
console.log("sss")