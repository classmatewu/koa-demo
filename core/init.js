// 用类组织这块的逻辑，将一部分本应该写在appjs中的逻辑提取出来，然后在appjs中导入再调用，相当于是初始化
const Router = require('koa-router')
const requireDirectory = require('require-directory')

class initManager {
    // 初始化
    static initCore(app) {
        initManager.app = app
        initManager.initLoadRouters()
        initManager.initLoadHttpException()
    }

    // 初始化加载路由，并注册到app应用上
	static initLoadRouters() {
        const apiDirectroy = `${process.cwd()}/app/api` // process.cwd()是获取当前当前项目在系统中的根目录，我也不知道这里直接用 /app/api为什么不行，可能是requireDirectory方法的路径得是相对路径或者是系统的根目录，而不能是项目根目录？
		requireDirectory(module, apiDirectroy, { // 路径最好用根路径，否则移动文件夹就报错了
			visit: whenLoadModule
        })
        
		// 回调函数，判断导出模块的类型，若是Router对象，则注册到app上
		function whenLoadModule(module) {
			if (module instanceof Router) {
				initManager.app.use(module.routes())
			}
		}
    }
    
    // 初始化加载Httpexception模块，放到全局global对象上面，方便使用具体异常类而不用频繁require
    static initLoadHttpException() {
        const errors = require('./http-exception')
        global.errors = errors
    }
}

module.exports = {
    initManager
}