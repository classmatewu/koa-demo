// Include modules.
var xlsx = require('node-xlsx');
var fs = require('fs');

// 写入excel之后是一个一行两列的表格
var data1 = [
['name', 'age']
];

// 写入excel之后是一个三行两列的表格
var data2 = [
['name', 'age'],
['zhang san', '10'],
['li si', '11']
];

var buffer = xlsx.build([
  {
      name:'sheet1',
      data:data1
  }, {
      name:'sheet2',
      data:data2
  }
  ]);

fs.writeFileSync('./book.xlsx', buffer, {'flag':'w'}); // 如果文件存在，覆盖