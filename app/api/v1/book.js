// book主题路由
const Router = require('koa-router')
const router = new Router({
    prefix: '/v1' // 该文件所有api的默认前缀
})

router.get('/book', async (ctx, next) => {
    ctx.body = {
        key: 'bookkkkk'
    }
})

module.exports = router