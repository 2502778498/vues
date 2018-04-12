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
      console.log(state)
      commit('ADD')

      function runAsync () {
        var p = new Promise(function (resolve, reject) {
          // 做一些异步操作
          setTimeout(function () {
            console.log('执行完成')
            resolve('随便什么数据')
          }, 2000)
        })
        return p
      }
      runAsync().then((data) => {
        console.log(data)
        // 随便什么数据
        // 后面可以用resolve传过来的数据做些其他操作
      })
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
