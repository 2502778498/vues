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
      axios.get('/api/test', {
        params: {
          ID: 12345
        }
      }).then(function (response) {
        console.log(response.data)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="css">

</style>
