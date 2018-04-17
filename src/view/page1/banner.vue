<template>
  <div class="banner">
    <ul class="wrap">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <input type="text" v-model="value"><br>
    <textarea id="tip" style="resize:none" v-model="textarea"></textarea>
    <br>
    <button @click="game('yes')">是</button><button @click="game('no')">否</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      textarea: ''
    }
  },
  mounted () {
    this.game()
  },
  methods: {
    game (ans) {
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
</style>
