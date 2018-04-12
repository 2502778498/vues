import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10,
    anotherCount: 6
  },
  mutations: {
    ADD (state) {
      state.count++
    },
    DEC (state) {
      state.count--
    },
    // 组件间传参
    ADD_VALUE (state, value) {
      state.count += value.value
    }
  },
  actions: {
    // 封装一个 ajax 方法
    sendAjax (context) {
      axios({
        method: 'get',
        url: '../../axios/api',
        data: context.state.count
      }).then((data) => {
        console.log(data)
      })
    },
    // add (context) {
    //   context.commit('ADD')
    // },
    // 或
    add ({commit, state}) {
      commit('ADD')

      // Promise
      let runAsync = () => {
        var p = new Promise((resolve, reject) => {
          // 做一些异步操作
          setTimeout(() => {
            var num = Math.ceil(Math.random() * 10) // 生成1-10的随机数
            var reason = '数字太大'
            if (num <= 5) {
              resolve(num)
            } else {
              reject(reason)
            }
          }, 1000)
        })
        return p
      }
      // 在then中，传入两个回调，分别执行resolve 和 reject
      runAsync().then((data) => {
        console.log('resolved')
        console.log(data)
      },
      (reason) => {
        console.log('rejected')
        console.log(reason)
      })

      // 将reject写在catch中，当resolve的回调中抛出异常时，不会报错卡死，而是会进入catch
      // runAsync().then((data) => {
      //   console.log('resolved')
      //   console.log(data)
      //   console.log(somedata) // 此处的somedata未定义
      // }).catch((reason) => {
      //   console.log('rejected')
      //   console.log(reason)
      // })
    },
    dec (context) {
      context.commit('DEC')
    },
    addValue ({commit}, value) {
      commit('ADD_VALUE', value)
    }
  },
  getters: {
    anotherCount: function (state) {
      return state.anotherCount
    }
  }
})
