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

module.exports = {
    PositiveIntegerValidate
}