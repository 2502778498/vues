<template>
  <div>
    <div @click="testss" >{{ test }}</div>
    <input type="text" id="classnamessss">
    <div id="message"></div><button @click="tryAndCatch()"> try and catch</button>
    <div @click="tests">{{ fullName }}</div>
      <h3>count is {{countss}}</h3>
      <p>组件自己内部的计算属性{{localComponent}}</p>
      <p>anothorAdd is {{anotherCount}}</p>
      <input type="file" @click="upload">
  </div>
</template>
<script>

import { mapState } from 'vuex'

export default {
  name: 'display',
  data () {
    return {
      num: 123,
      firstName: 'zhang',
      lastName: 'sanfeng'
    }
  },
  computed: {
    // 第一种方法：因为一个state就是一个函数，所以当有多个state时，需写多个函数，不方便
    // mapState将state直接映射到组件中
    // countss () {
    //   return this.$store.state.count
    // }

    // mapstate：接受一个对象或数组

    // 对象
    ...mapState({
      // 以下两种方法
      // countss: state => state.count
      // 组件内的每一个属性函数都会获得一个默认参数state, 然后通过state 直接获取它的属性更简洁

      countss: 'count'
      // 'count' 直接映射到state 对象中的count, 它相当于 this.$store.state.count,
    }),
    // 数组： 当组件和state中的属性名一样，不改名字时
    // computed: mapState([   // 数组
    //     "count"
    // ])
    localComponent () {
      return this.countss + 10
    },
    anotherCount () {
      return this.$store.getters.anotherCount
    },
    test: {
      get: function () {
        // num的值每变化一次就调用一次
        console.log(this.num)
        return this.num + 1
      },
      set: function (newValue) {
        this.num += 10
        console.log(newValue + 'll' + this.num)
        // return this.num
      }
    },
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        console.log(newValue + ';;;;')
        var names = newValue.split(' ')
        this.firstName = names[0] + 'haha'
        this.lastName = names[names.length - 1] + 'hehe'
      }
    }
  },
  methods: {
    tests: function () {
      this.fullName = this.firstName + ' ' + this.lastName
    },
    testss: function () {
      this.test += 5
    },
    tryAndCatch: function () {
      // 自定义错误信息
      // let val = document.getElementById('classnamessss').value
      // let meg = document.getElementById('message')
      // meg.innerText = ''
      try {
        // if (val === '') {
        //   throw '值为空'
        // }
        // if (isNaN(val)) {
        //   throw '不是数字'
        // }
        // val = Number(val)
        // if (val < 5) {
        //   throw '太小'
        // }
        // if (val > 10) {
        //   throw '太大'
        // }
        alert('alert写错了')
      } catch (error) {
        // meg.innerText = error
        alert('错误描述：\n' + error.message)
      }
    },
    upload: function (e) {
      console.log(Array.from(e.target))
      console.log(e.target)
    }
  }
}
</script>
