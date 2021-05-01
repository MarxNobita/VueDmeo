// import Vue from 'vue'
import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/home/Home.vue"
// import Cart from "../views/cart/Cart.vue"
// import Profile from "../views/profile/Profile.vue"
// 懒加载
const Home = () => import("../views/home/Home")
const Cart = () => import("../views/cart/Cart")
const Profile = () => import("../views/profile/Profile")

//1.安装插件
// Vue.use(VueRouter)

//2.创建路由对象
// const routes = [

// ]
// const router = new VueRouter({
//     routes
// })
const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/profile',
            component: Profile
        },
    ]
});

//3.导出router
export default router