<template>
  <ul class="ul">
    <!-- <li><router-link to="/page1">page1</router-link></li>
    <li><router-link to="/page2">page2</router-link></li>
    <li><router-link to="/page3">page3</router-link></li> -->
  </ul>
   <!-- <header></header> -->

</template>
<script>
export default {}
</script>
<style lang='scss'>
.ul li{
  list-style: none;
  color: red;
  margin: 2rem 0;
  background-color: #cccccc;
}
.ul{
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: yellow;
  position: relative;
  // left: -30%;
}
</style>
