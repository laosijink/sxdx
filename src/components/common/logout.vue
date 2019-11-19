<!--  -->
<template>
  <div>
<el-card class="box-card">
    <p>您将要注销您的账户</p>
    <el-button type="danger" round @click="open">确定</el-button>
</el-card>


  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
   methods: {
      open() {
        this.$prompt('请输入密码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '您的账户已注销',
            
          });
          this.$router.push("/login");
          this.$router.go(0)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
    }
}
</script>

<style lang='scss' scoped>
.box-card {
  width: 500px;
  margin: 0 auto;
  margin-top: 40px;
  p{
    padding: 50px 0;
  }
}
.el-form-item {
  margin-bottom: 22px;
}

.butt{
  padding: 10px 50px;
      margin: 10px 45px;
}
</style>
