<template>
  <div class="banner">
    <ul class="wrap" id="wrap">
      <li class="aa" v-for="(item, index) in liArr" :key="index" :index="index" @click="findIndex">{{item}}</li>
      <!-- <li :class='{color: index === 1}' @click="index = num + 2" style="margin: 10px 0;">2</li>
      <li :class='{color: index === 2}' @click="index = num + 3">3</li> -->
    </ul>
    <input type="text" v-model="value" :maxlength="6" :minlength="3"><br>
    <textarea id="tip" style="resize:none" v-model="textarea" :item='1'>
    </textarea>
    <br>
    <button @click="game('yes')">是</button><button @click="game('no')">否</button>
    <div>
      <p>{{ans}}</p>
      <img :src="imgSrc">
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      value: '',
      textarea: '',
      num: -1,
      index: -1,
      liArr: [1, 2, 3],
      imgSrc: '',
      ans: ''
    }
  },
  mounted () {
    this.game()
  },
  methods: {
    game (ans) {
      console.log(this.$router.options)
      console.log(this.$route)
      this.ans = '······'
      axios.get('https://yesno.wtf/api')
        .then((res) => {
          console.log(res)
          this.ans = res.data.answer
          // this.imgSrc = res.data.image
        })
        .catch((err) => {
          console.log(err)
        })
    },
    findIndex (e) {
      console.log(e.target)
      console.log(e.target.getAttribute('index'))
      // const indexLen = document.getElementById('wrap').getElementsByTagName('li').length
      // for (var i = 0; i < indexLen; i++) {
      // const index = event.currentTarget.getAttribute('index')
      // !function (i) {
      //   // if (index === i) {
      //   //   alert(ind
      //   alert(i)
      // }(i)
      // }
      //
    }
  }// ,
  // computed () {

  // }
}
</script>
<style>
/* // .banner{
// .wrap{
// li{
// width: 50px;
// height: 50px;
// list-style: none;
// }
// }
// } */
/* blockquote{
filter: blur(1px);
background-color: black;
color: azure;
width: 300px;
} */
.color{
  color: red;
}
</style>
