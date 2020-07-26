const fs = require('fs');
const CSV = require('comma-separated-values')

var data = [
    { year: 1850, age: 20, status: 0, sex: 1, population: 1017281 },
    { year: 1850, age: 20, status: 0, sex: 2, population: 1003841 }
];

const csvEncode = new CSV(data, { header: true }).encode(); // 编码：将 对象数组 编码为 csv格式的字符串 ， 并添加表头
// console.log(csvEncode)

// 生成csv文件
fs.writeFile('./csvTest.csv', csvEncode, function(err){
    if (err) console.log(err, '---->csv<---')
})