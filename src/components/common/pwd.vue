<!--  -->
<template>
  <div>
    <el-card class="box-card">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="旧密码" prop="pass1">
          <el-input type="password" v-model="ruleForm.pass1" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="butt">提交</el-button>
          <el-button @click="resetForm('ruleForm')" class="butt">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    var validatePass1 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass1: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        pass1: [{ validator: validatePass1, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = this.ruleForm;
          axios({
            method: "post",
            url: "/student/modifyPassword",
            withCredentials: true,
            data: data
          }).then(res => {
            if (res.data.status === "0") {
              this.$message({
                showClose: true,
                message: "密码错误！",
                type: "success"
              });
            } else if (res.data.status === "1") {
              this.$message({
                showClose: true,
                message: "修改成功",
                type: "warning"
              });
            } else if (res.data.status === "2") {
              this.$message({
                showClose: true,
                message: "修改失败",
                type: "warning"
              });
            }
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang='scss' scoped>
.box-card {
  width: 1000px;
  margin: 0 auto;
  margin-top: 40px;
  .demo-ruleForm {
    padding: 30px 70px 0;
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
