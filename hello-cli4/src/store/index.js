
import { createStore } from 'vuex'

const store = createStore({
    state: {

        counter: 1,
        atm: [
            {
                title: "光之国教练总队",
                name: "泰罗奥特曼",
                power: 180,
            },
            {
                title: "光之国武打教练",
                name: "雷欧奥特曼",
                power: 190,
            },
            {
                title: "光之国屠夫",
                name: "艾斯奥特曼",
                power: 188,
            },
            {
                title: "光之国驸马爷",
                name: "爱迪奥特曼",
                power: 160,
            }
        ]
    },
    mutations: {
        addNumber(state) {
            // this.counter++;
            state.counter++;
        },
        subNumber(state) {
            // this.counter++;
            state.counter--;
        },
        changeNumber(state, n) {
            state.counter += n;
        },
        pushAtm(state, atm) {
            state.atm.push(atm)
        }
    },
    actions: {
        // 这个主要异步操作，需要用dispatch,这个使用回头再练 
    },
    getters: {
        counterSqu(state) {
            return state.counter * state.counter
        },
        morePower175Atm(state,) {
            return state.atm.filter(item => { return item.power > 175 })
        },
        morePower175AtmLength(state, getters) {
            // return state.atm.filter(item => { return item.power > 175 }).length  但是这样有重复函数
            return getters.morePower175Atm.length
        },
        morePowerppAtm(state) {
            return function (power) {
                // return state.atm.filter(item => {
                //     return item.power > power
                // })   下面是超简写方式
                return state.atm.filter(a => a.power > power)
            }
        }
    },
    modules: {
        // 模块，就是套娃
    },
})
//1.安装插件
// Vue.use(Vuex);
//2.创建对象


//3.导出
export default store