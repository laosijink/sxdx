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
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    open() {
      this.$prompt("请输入密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({value}) => {
          axios({
            method: "post",
            url: "/student/delete",
            withCredentials: true,
            data: value.substring(0, value.length - 1)
          }).then((res) => {
            if (res.data.status === "0") {
              this.$message({
                showClose: true,
                message: "密码错误！",
                type: "success"
              });
            } else if (res.data.status === "1") {
              this.$message({
                showClose: true,
                message: "注销成功",
                type: "warning"
              });
              this.$router.push("/login");
              this.$router.go(0);
            } else if (res.data.status === "2") {
              this.$message({
                showClose: true,
                message: "注销失败",
                type: "warning"
              });
            }
          });
        }).catch(() => {
          this.$message({
            type: "info",
            message: "取消注销"
          });
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.box-card {
  width: 500px;
  margin: 0 auto;
  margin-top: 40px;
  p {
    padding: 50px 0;
  }
}
.el-form-item {
  margin-bottom: 22px;
}

.butt {
  padding: 10px 50px;
  margin: 10px 45px;
}
</style>
