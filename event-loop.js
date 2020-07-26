/**********
 * 情景一
 */

console.log(1)

new Promise((resolve, reject) => {
    console.log(3)
    $.ajax({
        url: xxx,
        params: xxx,
        success(data) {
            console.log(4)
            resolve(data)
        }
    })
}).then(data => {
    console.log(5)
})

console.log(2)

// 13245

// 理解：
// 先132，然后ajax请求扔进宏任务队列里，then扔进微任务里，那主线程结束时应该是先执行的微任务，但then又是依赖于前面的宏任务
// 所以这时微任务跟宏任务是宏任务里先有任务，然后紧接着微任务才有任务，所以先4后5





/**********
 * 情景二
 */

const axios = (url) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            success(data) {
                resolve(data)
            }
        })
    })
}

const urlArr = ["https1", "https2", "https3", "https4", "https5" , ...]
// const promiseArr = urlArr.map(url => axios(url))
const promise0 = axios(urlArr[0])
const promise1 = axios(urlArr[1])

// const data = promise.all(promiseAll)
promise.all([promise0, promise1]).then(data => {
    console.log(data)
})


// 理解：
// new Promise是同步的，所以是主线程，Promise.then是微任务
// promise.all 会等到多个promise状态都resolve，才会执行，也就是相当于前面是异步的，到这里会等，然后再Promise.all().then
// 并发：Promse.all在处理多个异步处理时非常有用，比如说一个页面上需要等两个或多个ajax的数据回来以后才正常显示，在此之前只显示loading图标。