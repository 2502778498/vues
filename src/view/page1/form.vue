<template>

<div class="flexd">
  <!-- <header-nav></header-nav> -->
  <!-- <is-show class="isshow"></is-show> -->
  <div class="show">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForms" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input type="text" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input  type="text" v-model="ruleForm.age"></el-input>
      </el-form-item>
    </el-form>
  </div>
  <input type="checkbox" :checked='checks'>
  <input type="checkbox" :checked='checks'>
  <input type="checkbox" :checked='checks'>
  <input type="checkbox" :checked='checks'>
  <input type="checkbox" id="btn" @click="check">
</div>
</template>

<script>
export default {
  data () {
    let validatePwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (isNaN(value)) {
        // if (this.ruleForm.name == '') {
        //   this.$refs.rules.validateField('checkPwd')
        // }
        callback(new Error('请输入数字'))
      } else if (!(value >= 0 && value <= 100)) {
        callback(new Error('请输入介于0～100之间的数字'))
      } else if (value !== parseInt(value)) {
        callback(new Error('请输入整数'))
      }
    }
    return {
      checks: false,
      ruleForm: {
        age: '',
        name: ''
      },
      rules: {
        name: [ // 简单验证
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        age: [
          {required: true, validator: validatePwd, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    check () {
      // let input = document.getElementsByTagName('input')
      // let l = input.length
      // // console.log(l)
      // for (let i = 0; i < l; i++) {
      // if (input[i].type === 'checkbox' && input[i].checked) {
      //   for (let j = 0; j < l; j++) {
      // console.log(input[i].checked)
      // }
      // }
      // }
      if (document.getElementById('btn').checked) {
        this.checks = true
      }
    }
  }
}
</script>

<style lang='scss'>
.show{
  color: #fff;
}
</style>
