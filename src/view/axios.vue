<template>
  <div class="flexd">
      <br>
      <br>
      <br>
      <br>
      <button @click="send"> 点击发送axios请求</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  methods: {
    send () {
      axios({
        url: '/api/test', // api 代理到json文件地址，后面的后缀是文件中的对象或者是数组
        method: 'get' // 请求方式
        // 这里可以添加axios文档中的各种配置
      }).then(function (res) {
        console.log(res, '成功')
      }).catch(function (err) {
        console.log(err, '错误')
      })
    }
  }
}
</script>
<style lang="css">

</style>
