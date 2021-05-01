import axios from 'axios'
// import eggggg from 'egggggg'     如果到时候axios崩了不再维护，换新的只要这样，改改下面几行就行了

export function request(config, success, failure) {      //在这里导出不再是default，因为可能需要很多的东西要导出
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000,
    })

    //2.请求拦截………………………………暂时先跳过，服务器有要求再说

    //3.发送真正的网络请求
    // instance(config)
    //     .then(res => {
    //         success(res)
    //     })
    //     .catch(err => {
    //         failure(err)
    //     })这不是最终版，因为源码中本身axios就是一个返回Promise的，所以可以直接return
    return instance(config)


}