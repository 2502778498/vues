<template>
  <div>
      <h3>user页面，动态部分是{{active}}</h3>
      <pre> ------  Echarts  ------</pre>
      <div id="echarts"></div>
  </div>
</template>
<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  computed: {
    active () {
      // url上 ？后面的内容，对象形式
      // console.log(this.$route.query)
      return this.$route.params.id
    }
  },
  watch: {// watch:监听
    //   监听$route的变化，在该组建切换时，进行一些操作
    // to：要去的组件   from：从那个组件过来，是两个对象，由params属性
    $route (to, from) {
      console.log(to)
    }
  },
  methods: {
    draw () {
      let myChart = echarts.init(document.getElementById('echarts'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销q量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  },
  mounted () {
    this.draw()
  }
}
</script>
<style lang="scss">
#echarts{
  width: 1000px;
  height:600px;
  border: 1px solid cyan;
  background-color: #fff;
  color: red;
}
</style>
