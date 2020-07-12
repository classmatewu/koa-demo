// 基于LinValidate定义各种校验规则类
const {LinValidator, Rule} = require('../../core/lin-validator')

class PositiveIntegerValidate extends LinValidator {
    constructor() {
        super()
        this.id = [
            new Rule('isInt', '需要是正整数', {min: 1}) // isInt是整数，加上min1才是正整数
        ]
    }
}

class RegisterValidator extends LinValidator {
    // 普通参数利用rule进行的校验规则
    constructor() {
        super()
        this.email = [
            new Rule('isEmail', '不符合Email规范')
        ]
        this.password1 = [
            new Rule('isLength', '密码至少6个字符，最多32个字符', {
                min: 6,
                max: 32
            }),
            new Rule('matches', '密码不符合规范', '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]') //  正则表达式，给密码指定字符范围（不能包含危险字符），并规定应包含哪些哪些字符以加强密码
        ]
        this.password2 = this.password1 // 2的校验规则与1的一样 // 2这里其实没必要校验，因为只要满足它跟1一样就可以了，然后1有校验就可以了
        this.nickname = [
            new Rule('isLength', '昵称不符合长度规范', {
                min: 4,
                max: 32
            })
        ]
    }
    // 上面的校验规则都是基于一个参数的校验的，但如果是要基于两个参数的校验（例如psw1是否等于psw2），我们就可以用lin-validator提供的自定义校验规则
    // 在构造方法下再新建一个^validate（必须以validate开头）的校验方法
    validatePassword(vals) { // 这是的参数就是请求传过来的所有参数
        const psw1 = vals.body.password1
        const psw2 = vals.body.password2
        if (psw1 !== psw2) {
            throw new Error('两个密码必须相同') // 注意这里直接抛出一个Error的异常就够了，因为Lin-validate内部就有统一地对异常进行处理并抛出详细的异常类型
        }
    }
}

module.exports = {
    PositiveIntegerValidate,
    RegisterValidator
}