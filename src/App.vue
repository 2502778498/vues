<template>
  <div id="app">
    <div class="routerPage">
      <!-- <img src="./assets/logo.png"> -->
      <router-link to="/view/page1/form" class="a">form</router-link>
      <!-- <router-link to="/view/page2/page2">page2</router-link> -->
      <router-link to="/show" class="a">show</router-link>

      <!-- 动态路由 ： 获取标签内容-->
      <router-link to="/view/user/123" class="a">user123</router-link>
      <router-link to="/view/user/456" class="a">user456</router-link>
      <router-link to="/view/page1/banner" class="a">banner</router-link>
    </div>
    <div class="view">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'APP'
}
</script>

<style lang="scss">
@import '../node_modules/normalize.css/normalize.css';// normalize.css 样式格式化
body{
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: row;
    color: aliceblue;
    /* margin-top: 60px; */
    .routerPage{
      // position: relative;
      height: 100vh;
      background-color: #333a4a;
      .a{
        display: block;
        width: 150px;
        height: 50px;
        color: aliceblue;
        background-color: #333a4a;
        text-decoration: none;
      }
    }
  }
  .view{
    // position: relative;
    // left: 150px;
    // top: -200px;
    width: 100%;
    background-color: #2c3342;
    padding: 20px;
  }
}
</style>
