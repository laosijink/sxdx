<template>
  <div class="home">
    <div class="topbt">
      <img src="../../public/img/topbt.png" />
    </div>
    <div class="main">
      <div class="container">
        <img src="../../public/img/bkg.jpg" id="bkgImg" />
        <div class="login">
          <!-- 选择器 -->
          <h1>登录</h1>
          <el-select v-model="value" placeholder="请选择" class="info">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <!-- 用户名、密码 -->
          <el-input placeholder="用户名" prefix-icon="el-icon-user-solid" v-model="input1" class="info"></el-input>
          <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="input2" show-password class="info"></el-input>
          <!-- 验证码 -->
          <el-input placeholder="请输入验证码" prefix-icon="el-icon-edit" v-model="input3" class="info ident"></el-input>
          <div class="verify-box" @click="refreshCode">
            <yzm :identifyCode="identifyCode"></yzm>
          </div>
          
          <!-- 登录按钮 -->
          <el-button type="primary" plain class="loginbut info" >登录</el-button>
          <!-- 忘记密码 -->
          <el-link type="info" @click="toPath()">忘记密码</el-link>
          <!-- 注册 -->
          <el-link type="primary" @click="toPath()" class="register">立即注册>></el-link>
        </div>
        <div class="list">
          <list></list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import yzm from "@/components/yzm.vue";
import list from "@/components/list.vue";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "学生"
        },
        {
          value: "选项2",
          label: "教师"
        },
        {
          value: "选项3",
          label: "管理员"
        }
      ],
      value: "选项1",
      input1: "",
      input2: "",
      input3: "",
      identifyCode: "5132"
    };
  },
  components: {
    yzm,
    list
  },
  methods: {
    //验证码模块
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      (this.identifyCode = ""), this.makeCode(this.identifyCode, 4);
      // console.log('当前验证码：' + this.identifyCode);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.randomNum(0, 10);
      }
    },
    //跳转路由
    toPath() {
      this.$router.push();
    }
  }
};
</script>
<style lang="scss" scoped>
.topbt {
  width: 1200px;
  margin: 0 auto;
  img {
    width: 700px;
    padding: 20px 0 10px 10px;
  }
}
.main {
  width: 100%;
  overflow: hidden;

  .container {
    position: relative;
    margin: 0 auto;
    width: 1200px;
    height: 550px;
    #bkgImg {
      position: absolute;
      left: -400px;
    }
    .login{
      position: absolute;
      padding: 20px 20px;
      border-radius: 10px;
      top: 100px;
      left: 20px;
      width: 320px;
      background: rgba($color: #fff, $alpha: 0.8);
      .info{
        margin: 10px 0  10px 0;
      }
      .ident{
        width: 140px;
      }
      .register{
        float: right;
      }
      .verify-box{
        display: inline-block;
        transform: translateY(11px);
        margin-left: 40px;
      }
      .loginbut{
        width: 100%;
      }
    }
    .list{
      position: absolute;
    top: 60px;
    right: 0px;
    width: 650px;
    }
  }
}
</style>