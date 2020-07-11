class HttpException extends Error {
    constructor(msg, errorCode, statusCode) {
        super() // 有继承的话，构造方法一定要调用super()(即父类构造方法，或者直接就不走进来了，报not fount简直很难排查错误)
        this.msg = msg
        this.errorCode = errorCode
        this.statusCode = statusCode
    }
}

module.exports = {
    HttpException
}