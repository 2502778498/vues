<template>
  <div>
      <h3>user页面，动态部分是{{active}}</h3>
  </div>
</template>
<script>
export default {
  computed: {
    active () {
      // url上 ？后面的内容，对象形式
      console.log(this.$route.query)
      return this.$route.params.id
    }
  },
  watch: {// watch:监听
    //   监听$route的变化，在该组建切换时，进行一些操作
    // to：要去的组件   from：从那个组件过来，是两个对象，由params属性
    $route (to, from) {
      console.log(to)
    }
  }
}
</script>
