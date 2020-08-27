var mysql = require('mysql');


// 登录数据库  database  只是选择进入那个数据库 下面可以创建数据库
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'my_sql'
  });
   
// 先连接  数据库
  connection.connect(function(err) {
    if(err){
        console.log('与MySQL数据库建立连接失败。')
    } else{
        console.log('与MySQL数据库建立连接成功。');
    }
});

// node 创建名字为nodemysql的数据库
let sql ='create database nodemysql'
connection.query(sql,(err,result)=>{
if(err){
    if(err.sqlMessage=="Can't create database 'nodemysql'; database exists"){
    console.log("数据库已存在")
    }
    console.log("创建失败")
}else{
console.log(result)
console.log("创建数据库成功")
}
})
// 查询数据
var cha = 'select * from student'
connection.query(cha,function(err,result){
if(err){
    console.log(err)
    return
}
console.log("------查询-------")
console.log(result)
console.log("---------查询完毕----------")
})


// 增加数据  第一种方法
connection.query('insert into student set ? ',{name:'jack'},function(err,data){
    // 在这里 database 是已经选定的某个数据库， 'insert into student set ? '这句话是需要插入stydent 这个表里面  name字段需要和表里对应 
    console.log(err)
       if(err){
           console.log('插入数据失败')
       } else {
           console.log('插入数据成功');
        // 查询数据
           connection.query('SELECT *FROM ??',['student'],function(err,data) {
                 if(err) {
                     console.log('查询数据失败');
                     connection.end() ;
                 } else {
                     console.log(data[0])
                     connection.end() ;

                 }
                
           })
       }
  })
// 增加数据   第二种方法
connection.query('insert into student(name) values(?)',['汪丹萍'],function(err,result){
    if(err){
        console.log('error');
        console.log(err);
        return;
      }
      console.log('-----------------新增成功----------------');
      console.log(result);
      console.log('-----------------结束----------------');
})
//修改数据
var modsql = 'update student set name=?'; //'如果修改某一个  UPDATE user SET name = ?,age = ? WHERE id = ?'
var modsqlparams=['修改之后'];
connection.query(modsql,modsqlparams,function(err,result){
  if(err){
      console.log(err)
      return
  }
  console.log("----------修改中--------")
  console.log(result)
  console.log("----------修改好了-------")
})
// 创建表  添加字段
var createsql = "CREATE TABLE employees (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))";
connection.query(createsql, function (err, result) {
if (err) {
if(err.sqlMessage=="Table 'employees' already exists"){
console.log("表已存在")
}else{
    return
}

}
console.log("_____创建表过程_____")
console.log(result);
console.log("创建表成功");
});


// 增加数据   第二种方法
connection.query('insert into employees(id,name,age,city) values(?,?,?,?)',[1,"光辉",18,"河南"],function(err,result){
    if(err){
        console.log('error');
        console.log(err);
        return;
      }
      console.log('-----------------新增成功----------------');
      console.log(result);
      console.log('-----------------结束----------------');
})



// 删除数据
var delsql ='delete from student name'    //如果单独  DELETE FROM user where id = 2