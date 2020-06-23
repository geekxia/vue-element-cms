<template>
<div class="login">
  <div class="box">
    <div class="title">欢迎登录系统</div>

    <div>
      <el-input v-model="username" placeholder="用户名"></el-input>
    </div>
    <div>
      <el-input v-model="password" placeholder="密码"></el-input>
    </div>
    <div>
      <el-button type="primary" @click='login'>登录</el-button>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      localStorage.setItem('token', '123')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  background: rgb(45, 58, 75);
  height: 100%;
  width: 100%;
  color: rgb(238, 238, 238);
  .box {
    width: 370px;
    margin: 0 auto;
    padding-top: 150px;
    &>div {
      line-height: 70px;
    }
    &>.title {
      font-size: 40px;
      text-align: center;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
