<template>
  <div>
    <pre>
      css滤镜
        filter: blur(10px);
    </pre>
    <pre>
      jq
        blur():输入框失去焦点时触发
        scrollLeft(num)
    </pre>
    <pre>
      js
        Element.scrollLeft = num:
        Element：父元素
    </pre>
    <pre>
      修饰符
        .sync 的 prop 的值时，这个变化也会同步到父组件中所绑定的值
        .native - 监听组件根元素的原生事件。 主要是给自定义的组件添加原生事件。
        .stop -- 阻止事件冒泡（事件不会向上传递）
        .prevent -- 阻止默认事件（不触发默认事件）
        .self.prevent -- 指定元素触发（不包括子元素）
        .once -- 绑定事件一次（触发后移除事件）
        .capture事件默认是双向的，先捕获，在冒泡
        按键修饰符
          按键修饰符,常见的修饰符.enter/.tab/.delete/.esc/.space/.up/.down。。键值
          <!-- <input type='text' @keyup.enter='say'> -->
          注意：'.'后面也可以使用对应键值的ASCII码值
    </pre>
    <pre>
      动态绑定style
        1、对象绑定方式：
          :style="{属性名：属性值}"
        2、数组绑定方式：
          :style="[data中的数据]"
          data:{
          data中的数据:{属性名:属性值}
        }
    </pre>
    <pre>
      动态绑定的class和原生的class可以共存，如果有覆盖，动态的覆盖静态的。
        1、对象绑定方式：
          :class="{类名：条件，类名：条件}"
            如果条件为true，添加样式；如果条件为false，移除样式。
        2、数组绑定方式：
          :class="[data中的数据，"类名"，{类名：条件}]"
          data:{
            data中的数据:“类名”，
          }
    </pre>
    <pre>
      同时绑定多个同类型事件
      @click = 'func1, func2, num = index + 1'
      事件因子
      --- @click = 'fun($event)'
          fun(e){ e.currentTarget => 所点击标签 即取得该dom节点 相当于 document.getElement 取得节点 即可对dom进行操作 }
          ||
          ||
      --- @click =' fun'
          fun(e){ e.target => 取到该dom节点 }
    </pre>
    <pre>
      对象的两种取值方式
      --- obj = {a:1,b:2}
        obj.a || obj['a']
      --- 键为变量
        obj[var]
    </pre>
    <pre>
       :maxlength="6" --- 限制输入框 最大长度为6
    </pre>
  </div>
</template>
