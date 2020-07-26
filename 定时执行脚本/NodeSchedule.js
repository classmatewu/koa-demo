const schedule = require('node-schedule');

console.log(1111)

// 秒数为59时执行一次
const j = schedule.scheduleJob({second: 59}, function(){
    console.log('Time for work!');
});

// 每天零点执行一次
let rule = new schedule.RecurrenceRule();
rule.hour = 0
rule.minute = 0
rule.second = 0

const j = schedule.scheduleJob(rule, function(){
    console.log('Time for sleep!');
});

console.log(2222)