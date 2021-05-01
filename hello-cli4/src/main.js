// import axios from 'axios'        因为后面把这个封装了，所以就不需要这个导入了
import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// App.config.createdevtools = true;             //这个是引用vue.js.devtools的插件

const app = createApp(App)

app.use(router)

app.use(store)
// app.devtools = true;
app.mount('#app')



// createApp(App).mount('#app')
// createApp(App).use(router).mount('#app')
//router???
// new Vue({
//     el: "#app",
//     router,
//     render: h => h(App)
// }).$mount('#app')
require('./assets/css/base.css')

/*
// axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//     console.log(res);
// })
//使用全局的axios和配置在进行网络请求
axios.defaults.baseURL = 'http://123.207.32.32:8000',
    axios.defaults.timeout = 5000,

    axios.all([axios({
        url: '/home/multidata'
    }), axios({
        // baseURL: "http://123.207.32.32:8000",        可以统一全局配置
        // timeout: 5,
        url: '/home/data',

        params: {
            type: 'sell',
            page: 5
        }
    })]).then(axios.spread((res1, res2) => {        //在这里res1和res2是解构
        console.log(res1);
        console.log(res2);
    }))


//创建对应的axios实例
const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
    // headers:{},
})

instance1({
    url: "/home/data",
    params: {
        type: 'pop',
        page: 1,
    },
}).then(res => {
    console.log(res);
})*/

//使用封装的axios…………………………………………………………………………………………………………………………………………………………………………………………重要!!
import { request } from "./network/request"

// request1({
//     url: '/home/multidata'
// }), res => {
//     console.log(res);
// }, err => {
//     console.log(err);
// }

//最终使用
// request1({
//     url: '/home/multidata'
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })