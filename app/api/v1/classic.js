 // classic主题路由
 const Router = require('koa-router')
 const {
    HttpException,
    ParameterException    
} = require('../../../core/http-exception')
 const router = new Router({
    prefix: '/v1'
 })

 router.post('/:id/classic/latest', async (ctx, next) => {
    const path = ctx.params // 路径参数
    const query = ctx.request.query // 路径后面的问号后面的参数
    const header = ctx.request.header // 请求头里的参数
    const body = ctx.request.body // 请求体里的参数

    if (true) {
        error = new global.errors.ParameterException()
        throw error
    }

    ctx.body = { // 当没有错误时返回给前端的数据
        key: 'classicccc'
    }
 })

 module.exports = router