var fs = require("fs");//需要安装node环境
var json2xls =require('json2xls')  //需要npm install json2xls
var excel = require("./xlsdata/jobs")
fs.readFile('./json1.json','utf8',function(err,data){
   if(err) throw err;
   let A =JSON.parse(data);
    console.log(A)
    let jsonArray = []
   for(let i in A){
    jsonArray.push({
      index:i,
     '中文':A[i]

    })

   }

   fs.readFile('./json2.json','utf8',function(err,data){
    if (err) throw err;
    let B = JSON.parse(data);
    jsonArray.forEach((item) => {
        item.英文 = B[item.index];
        // delete item.index
    })
    console.log(jsonArray)
    let xlxsData = json2xls(jsonArray);
    let sss =  json2xls(excel.data);
    fs.writeFileSync('./xlsdata/data.xlsx', xlxsData, 'binary')
    fs.writeFileSync('./xlsdata/sss.xlsx', sss, 'binary')
})


})




