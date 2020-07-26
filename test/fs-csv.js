const fs = require('fs');

function App() {
  // 模拟数据
  let list = []
  // 对象数组中每一个对象就是一条数据
  for (let i = 0; i < 10; i += 1) {
    list.push({
      id: 'Uid' + i,
      s1: '风急天高猿啸哀',
      s2: '渚清沙白鸟飞回',
      s3: '无边落木萧萧下',
      s4: '不尽长江滚滚来',
    })
  }

  // csv文件中，逗号表示一个跳到下一个单元格，\n表示换行
  // 生成表头 ( \ufeff --> 防止乱码 )
  var csvContent = '\ufeff序号,';
  csvContent += '第一句,';
  csvContent += '第二句,';
  csvContent += '第三句,';
  csvContent += '第四句\n';

  // 生成内容 \n下一行
  list.forEach((item, index) => {
    csvContent += index + ',';
    csvContent += item.s1 + ',';
    csvContent += item.s2 + ',';
    csvContent += item.s3 + ',';
    csvContent += item.s4 + '\n';
  })

  // 生成文件夹
  fs.mkdir('七言绝句', (err) => {
    if (err) return console.log(err, '--->mkdir<---')
  })

  // 生成csv文件
  fs.writeFile('./七言绝句/data.csv', csvContent, function(err){
    if (err) console.log(err, '---->csv<---')
  })

  // 生成JOSN
  fs.writeFile('./七言绝句/data.json', JSON.stringify(list), (err) => {
    if (err) console.log(err, '--->JSON<---')
  })
}

// 调用
App()