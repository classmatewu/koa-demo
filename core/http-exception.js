class HttpException extends Error {
    constructor(msg='参数错误', errorCode=10000, statusCode=400) {
        super() // 有继承的话，构造方法一定要调用super()(即父类构造方法，或者直接就不走进来了，报not fount简直很难排查错误)
        this.msg = msg
        this.errorCode = errorCode
        this.statusCode = statusCode
    }
}

class ParameterException extends HttpException {
    constructor(msg, errorCode, statusCode) {
        super()
        this.msg = msg || '参数错误辽'
        this.errorCode = errorCode || 10000
        this.statusCode = statusCode || 400
    }
}

module.exports = {
    HttpException,
    ParameterException
}