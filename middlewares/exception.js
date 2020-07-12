// 全局异常处理，它其实就是一个中间件，注册到app上面
// 作为app第一个走的中间件， 然后将其他中间件（next）外面包裹一层try catch
// 当try到异常信息时，在catch中在ctx.body上输出一段有意义的提示到客户端
// 但前提是我在api逻辑那里有将一些错误信息（比如邮箱账号不存在）new Error并throw出来，在外层才能try到

const { HttpException } = require("../core/http-exception")

const catchError = async (ctx, next) => {
    try {
        await next() // 将全局异常处理中间件为最外层中间件，第一个走，对其他的中间件进行try catch 达到全局捕获异常的效果
    } catch (error) { // 当有错误时，返回给前端的有意义的错误提示
        // 已知异常(如果是HttpExpection的实例/子类，那么就是已知异常 )
        if (error instanceof HttpException) { // 如果error对象中有errorCode字段，证明这是我们自定义的错误，所以就将我们设置的信息提示返回给前端
            ctx.body = {
                msg: error.msg,
                errorCode: error.errorCode, 
                request: `${ctx.method} ${ctx.path}` // request可以直接在ctx上面拿到，所以就不放到类里面了
            }
            ctx.status = error.statusCode // 注意http状态码不是保存在ctx.body对象中，而是写在ctx.status中返回给前端
        } else { // 未知异常，就是这个异常不是我们自定义抛出的异常，而是在编译时由于语法错误等由node抛出来的异常，同样我们也要像已知异常那样的格式返回给前端
            ctx.body = {
                msg: '出现了一个未知异常，注意排查下api逻辑或语法错误噢',
                errorCode: 999,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = 500 // 未知异常一般抛出500状态码
        }
    }
}

module.exports = {
    catchError
}