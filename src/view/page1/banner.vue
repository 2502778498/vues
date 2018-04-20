<template>
  <div class="banner">
    <ul class="wrap" id="wrap">
      <li class="aa" v-for="(item, index) in liArr" :key="index" :index="index" @click="findIndex">{{item}}</li>
      <!-- <li :class='{color: index === 1}' @click="index = num + 2" style="margin: 10px 0;">2</li>
      <li :class='{color: index === 2}' @click="index = num + 3">3</li> -->
    </ul>
    <input type="text" v-model="value"><br>
    <textarea id="tip" style="resize:none" v-model="textarea" :item='1'>
      yigeniwenwodadeyouxi
    </textarea>
    <br>
    <button @click="game('yes')">是</button><button @click="game('no')">否</button>
    <div>
      <p id="ans"></p>
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
      imgSrc: ''
    }
  },
  mounted () {
    // this.game()
  },
  methods: {
    game (ans) {
      axios.get('https://yesno.wtf/api')
        .then((res) => {
          console.log(res)
          document.getElementById('ans').innerText = res.data.answer
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
