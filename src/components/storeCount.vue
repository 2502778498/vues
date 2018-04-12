<template>
  <div>
      <!-- <button @click="add">+1</button> -->
     <button @click="addss">+1</button>  <!--  事件处理函数变为addss -->
      <button @click="decss">-1</button>
      <!-- <button @click="dec">-1</button> -->

      <!-- 新增内容: 组件间的参数传递   点击按钮，count增加输入框内的内容 -->
      <br>
      <input type="text" v-model="addValue">
      <button @click="addValues">add</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  // name: 'storeCount',
  data () {
    return {
      addValue: 0
    }
  },
  computed: {
    anotherCount () {
      return this.$store.getters.anotherCount
    }
  },
  methods: {
    // 当事件较多时，需写多个函数，存在大量的重复， 故使用mapactive函数

    // add () {
    //   this.$store.dispatch('add')
    // },
    // dec () {
    //   this.$store.dispatch('dec')
    // },
    // mapactive
    // 当事件名与actions commint的名一致时 ⬇️
    // ...mapActions(["increment","decrement"]),
    ...mapActions({
      addss: 'add',
      decss: 'dec'
    }),
    addValues () {
      // 在组件内部dispatch action 的时候，它可以自定义参数，只要参数在它dispatch 的action名称 后面，依次列出来就可以了
      this.$store.dispatch('addValue', {value: this.addValue, anotherValue: this.anotherCount})
    }
  }
}
</script>
