<!-- 注册 -->
<template>
  <div>
    <div class="topbt">
      <img src="../../public/img/topbt.png" />
    </div>
    <div class="main">
      <div class="container">
        <img src="../../public/img/bkg.jpg" id="bkgImg" />

        <div class="register">
          <span class="el-icon-edit-outline fs28 tit">用户注册</span>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            status-icon
            size="small"
          >
            <el-form-item label="学号" prop="ID">
              <el-input type="ID" v-model="ruleForm.ID" autocomplete="off" maxlength="12"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="性别" prop="sex">
              <el-radio v-model="ruleForm.radio" label="男">男</el-radio>
              <el-radio v-model="ruleForm.radio" label="女">女</el-radio>
            </el-form-item>

            <el-form-item
              label="民族"
              prop="nation"
              :rules="[
      { message: '民族不能为空'}
    ]"
            >
              <el-input type="ID" v-model="ruleForm.nation" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="专业" prop="uni">
              <uni @transferUser="getData"></uni>
            </el-form-item>

            <el-form-item label="身份证号码" prop="IDcard">
              <el-input v-model="ruleForm.IDcard"></el-input>
            </el-form-item>

            <el-form-item label="手机号码" prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="submit">
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
                size="medium"
                class="butt"
              >提交</el-button>
              <el-button @click="resetForm('ruleForm')" size="medium" class="butt">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import uni from "@/components/common/uni.vue";
export default {
  data() {
    var ID = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入学号"));
      } else if (this.ruleForm.ID.length !== 12) {
        callback(new Error("学号由12位数字组成!"));
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
    let myreg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    var IDcard = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入身份证号码"));
      } else if (!myreg.test(this.ruleForm.IDcard)) {
        callback(new Error("身份证号码格式错误!"));
      } else {
        callback();
      }
    };
    let reg = /^1[3456789]\d{9}$/;
    var phone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号码"));
      } else if (!reg.test(this.ruleForm.phone)) {
        callback(new Error("手机号码格式错误!"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        ID: "",
        name: "",
        pass: "",
        checkPass: "",
        IDcard: "",
        phone: "",
        nation: "",
        uni: "",
        radio: "男"
      },
      rules: {
        ID: [{ validator: ID, trigger: "blur" }],
        name: [
          { message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        IDcard: [{ validator: IDcard, trigger: "blur" }],
        phone: [{ validator: phone, trigger: "blur" }]
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
            url: "/student/register",
            withCredentials: true,
            data: data
          }).then(res => {
            this.$message({
                showClose: true,
                message: '注册成功！',
                type: 'success'
            });
            this.$router.push("/login");
          });
        } else {
          this.$message({
                showClose: true,
                message: '注册失败！',
                type: 'error'
            });
          return false;
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getData(msg) {
      this.ruleForm.uni = msg;
    }
  },

  components: {
    uni
  }
};
</script>

<style lang='scss' scoped>
.register {
  background: rgba($color: #fff, $alpha: 0.9);
  position: absolute;
  border-radius: 10px;
  top: 28px;
  left: 250px;
  width: 700px;
  padding: 10px;
  .tit {
    padding: 10px 0 15px 18px;
  }
  .submit {
    text-align: center;
    padding-right: 65px;
    .butt {
      width: 170px;
      margin: 5px 40px;
    }
  }
  .el-form-item--mini.el-form-item,
  .el-form-item--small.el-form-item {
    margin-bottom: 18px;
    width: 640px;
  }
}
</style>
