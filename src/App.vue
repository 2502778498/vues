<template>
  <div id="app">
    <div class="routerPage" >
      <!-- <img src="./assets/logo.png"> -->
      <router-link v-for="(item, index) in AllPath" :key="index" :index="index" :to="item.path" class="a" :class='{color: index === indexof}' @click.native="funColor($event)" style="margin: 20px 0 0;">{{item.text}}</router-link>
      <!-- <slide-item></slide-item> -->
    </div>
    <div class="view">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import slideItem from '@/components/slideItem'
export default {
  name: 'APP',
  components: {
    // slideItem
  },
  data () {
    return {
      indexof: 1,
      AllPath: [
        {
          path: '/view/note/note',
          text: 'note'
        },
        {
          path: '/view/page1/form',
          text: 'form'
        },
        {
          path: '/show',
          text: 'show'
        },
        {
          path: '/view/user/123',
          text: 'user123'
        },
        {
          path: '/view/user/456',
          text: 'user456'
        },
        {
          path: '/view/user/456',
          text: 'user456'
        },
        {
          path: '/view/page1/banner',
          text: 'banner'
        },
        {
          path: '/view/test/test',
          text: 'test'
        }
      ]
    }
  },
  methods: {
    funColor (event) {
      this.indexof = event.currentTarget.getAttribute('index')
    }
  }
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
      .a.color{
        color: red;
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
