// model 生成 表
const {sequelize} = require('../../core/db')
const {Sequelize, Model} = require('sequelize')

// 建一个model就必须继承于Model
class User extends Model {
    
}

// 继承于Model类，所以就可以调用init方法（原型上的方法）来创建该模型需要的字段
User.init({
    id: { // 若不显示地设置id，那么也会生成一个默认的id
        type: Sequelize.INTEGER, // 设置成数字搜索效率更高一点
        primaryKey: true, // 主键，主键必须满足：唯一且不能为空
        autoIncrement: true // 自增长，简单但也有其他不足的地方，例如高并发时不准确、需要知道前一个id才能加1，所以得从数据库里取上一个id
    },
    nickname: Sequelize.STRING,
    eamil: {
        type: Sequelize.STRING(128), //最长128位
        unique: true // 唯一
    },
    password: Sequelize.STRING,
    openid: {
        type: Sequelize.STRING(64), //最长64位
        unique: true // 唯一
    }
},{
    sequelize, // 
    tableName: 'user' // 生成的数据库表的名字
})

module.exports = {User}        
