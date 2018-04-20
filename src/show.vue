<template>
<div class="showPage">
  <div class="go">show测试页ww</div>
  <img :src="imgPath" class="img">
  <router-link to="/show/page3">page3</router-link>
  <router-link to="/show/page2">page2</router-link>
  <display></display>
  <store-count></store-count>
  <router-view></router-view>
</div>
</template>
<script>
import storeCount from '@/components/storeCount'
import display from '@/components/display'
const imgPath = require('./assets/logo.png')
export default {
  data () {
    return {
      imgPath
    }
  },
  components: {
    storeCount,
    display
  }
//   methods: {
//     isclick () {
//       this.right = !this.right
//       if (this.right) {
//       }
//     }
//   }
}
</script>

<style lang="scss">
.showPage{
  .go{
    width: 10rem;
    height: 10rem;
    border-radius: .5rem;
  }
  .img{
    width: 100px;
    height: 100px;
  }
}
</style>
