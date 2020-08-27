//这个案例展示get请求参数如何获得
var finalhandler = require('finalhandler')
var serveStatic = require('serve-static')//之前安装的两个依赖
var http = require('http')
var url = require('url')
var fs = require('fs')//node内置模块
// Serve up public/ftp folder
//配置静态资源服务器，将public文件夹静态化出来

var serve = serveStatic('../../web/project2/index.html', {'index': ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function onRequest (req, res) {
    res.writeHead(200, { // 响应状态
        "Content-Type": "text/plain;charset=utf-8", // 响应数据类型  utf8
        'Access-Control-Allow-Origin': '*', // 允许任何一个域名访问
       });
    //路由
    var pathname = url.parse(req.url).pathname;
    console.log(pathname)
    if(pathname == '/addStudent'){
        //拿到GET请求参数，就是拿到地址栏中的东西。
        var queryJSON = url.parse(req.url,true).query;
        var data = `姓名：${queryJSON.name}\r\n年龄：${queryJSON.age}\r\n性别：${queryJSON.sex}\r\n`;
        fs.writeFile(`../../student_data/${queryJSON.name}.txt`,data,(err) => {//判断如果是addStudent这个接口，会获得数据后自动生成一个txt文件
            console.log(err);
            //返回状态码
            if(err){
                res.end('cuowu');
            }else{
                res.end('ok');
            }
        })
        return;
    }
    serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(6060)
console.log(222)
