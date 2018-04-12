<template>
<div id='carousel' class='wrap'>
  <div class='container'>
    <div id='first'>
      <ul>
        <li>
         回收站里的文件删除了怎么恢复
        </li>
        <li>
         c盘哪些文件可以删除
        </li>
      </ul>
    </div>
    <div id='second'></div>
  </div>
</div>
</template>

<script>
export default {
  // name: 'nav',
  mounted: function () {
    var carousel = document.getElementById('carousel')
    var first = document.getElementById('first')
    var second = document.getElementById('second')
    var container = document.getElementsByClassName('container')[0]
    second.innerHTML = document.getElementById('first').innerHTML

    // 横向 回调
    let rowFunction = () => {
      if (carousel.scrollLeft - second.offsetWidth >= 0) {
        carousel.scrollLeft -= first.offsetWidth
      } else {
        carousel.scrollLeft++
      }
    }
    // 纵向 回调
    let colFunction = () => {
      if (carousel.scrollTop - second.offsetHeight >= 0) {
        carousel.scrollTop -= first.offsetHeight
      } else {
        carousel.scrollTop++
      }
      // console.log(carousel.scrollTop)
    }

    //  确定 回调
    let action
    let div = container.getElementsByTagName('div')
    let ul = container.getElementsByTagName('ul')
    let li = container.getElementsByTagName('li')
    for (let j = 0; j < ul.length; j++) {
      ul[j].style.padding = '0'
      ul[j].style.margin = '0'
    }
    if (this.direction === 'row') {
      action = rowFunction
      container.style.width = '8000%'
      div[0].style.float = 'left'
      div[1].style.float = 'left'
      for (let i = 0; i < li.length; i++) {
        li[i].style.float = 'left'
      }
      for (let j = 0; j < ul.length; j++) {
        ul[j].style.float = 'left'
      }
    } else if (this.direction === 'column') {
      for (let i = 0; i < li.length; i++) {
        li[i].style.width = '100%'
      }
      action = colFunction
    }
    // 开始滚动
    let clear = setInterval(action, 30)
    // 暂停
    carousel.onmouseover = () => {
      clearInterval(clear)
    }
    // 继续
    carousel.onmouseout = () => {
      clear = setInterval(action, 30)
    }
  },
  data () {
    return {
      direction: 'column'
    }
  }
}
</script>
<style type='text/css'>
.wrap {
  overflow: hidden;
  width: 400px;
  color: aliceblue;
  height: 30px;
}

.wrap .container {
  height: 30px;
}

.wrap .container ul {
  height: 30px;
  overflow: hidden;
  zoom: 1;
}

.wrap .container ul li {
  line-height: 30px;
  list-style: none;
}

</style>
