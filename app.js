// 项目入口文件
const Koa = require('koa')
const parser = require('koa-bodyparser') // 加载这个包并注册中间件使得可以可以通过ctx.request.body拿到body参数
const {initManager} = require('./core/init')
const {catchError} = require('./middlewares/exception')

// require('./app/models/user') // 强行加上这一句，来让应用程序调用model生成一个表

const app = new Koa() // koa应用程序对象
app.use(parser()) // 注意这里得调用一下parser()再注册到app上面
app.use(catchError) // 全局异常处理，作为最前面的中间件，将其他中间件包起来进行全局异常的捕获

initManager.initCore(app) // 初始化

app.listen(8081)