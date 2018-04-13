<template>
  <div>
      <div class="wrap" id="wrap" style="width:200px;background-color:black;overflow:scroll; ">
          <div id="move">hunhuneedeyoushiyitianagaolaigaoquzuihouhaishikuibenliaoamingtianguohouyoushiyigeyanyangtianawihaokaixinanikaixinbu</div>
      </div>
			<button @click="move">move</button>
  </div>
</template>
<script>
export default {
	methods: {
		move () {
			let move = document.getElementById('move')
			let wrap = document.getElementById('wrap')
			// 移动的是父盒子
			wrap.scrollLeft += 130
		}
	}
}
</script>
<style lang='scss'>
</style>
