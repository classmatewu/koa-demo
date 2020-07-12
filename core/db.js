// sequelize数据库库操作
const {Sequelize} = require('sequelize')
const {
    dbName,
    host,
    port,
    user,
    password
} = require('../config/config').database

const sequelize = new Sequelize(dbName, user, password, {
    dialect: 'mysql', // 表明用的是mysql，且需要安装mysql驱动——mysql2
    host,
    port,
    logging: true, // true的话会将sequelize相关的操作都会以mysql语句的方式显示在终端上，方便我们看操作了什么
    timezone: '+08:00', // sequelize自动生成的时间默认是会比北京时间少8小时，所以得+08:00才能一致
    // 配置更加个性话的参数
    define:{
        //create_time  update_time delete_time
        timestamps:true,
        paranoid:true,
        createdAt:'created_at',
        updatedAt:'updated_at',
        deletedAt:'deleted_at',
        underscored:true,
        freezeTableName:true,
        scopes:{
            bh:{
                attributes:{
                    exclude:['updated_at','deleted_at','created_at']
                }
            }
        }
    }
})

sequelize.sync({
    force:false
})

module.exports = {
    sequelize
}

// es6import导入重命名是用as，require导入重命名用 ：
// 或者两种中都可以在导出时用：进行模块的重命名