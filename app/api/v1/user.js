 // classic主题路由
const Router = require('koa-router')
const {RegisterValidator} = require('../../validate/validate')
const router = new Router({
    prefix: '/v1/user'
})

router.post('/register', async (ctx, next) => {
    const v = new RegisterValidator().validate(ctx)
    ctx.body = "注册成功辽"
})

 module.exports = router // 记得路由得导出，且不能以{}导出，因为这里我们做了自动加载以及自动注册，而且若出错很难快速定位到是这里的错误