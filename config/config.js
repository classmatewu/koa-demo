module.exports = {
    // dev开发环境  prod生产环境
    environment: 'dev',
    database: { // 要连接的数据库信息
        dbName: 'island', // 数据库名
        host: 'localhost', // 主机
        port: 3306, // 端口号
        user: 'root', // 账号
        password: 'root' // 密码
   }
}