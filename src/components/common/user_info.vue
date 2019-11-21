<!--  -->
<template>
  <div>
    <el-card class="box-card">
      <div class="register">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          status-icon
          size="small"
        >
          <el-form-item label="学号" prop="id">
            <el-input
              type="id"
              v-model="ruleForm.id"
              autocomplete="off"
              maxlength="12"
              :disabled="isabled"
            ></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" :disabled="isabled"></el-input>
          </el-form-item>

          <el-form-item label="性别" prop="sex">
            <el-radio v-model="ruleForm.gender" label="男" :disabled="isabled" class="sty_left sex">男</el-radio>
            <el-radio v-model="ruleForm.gender" label="女" :disabled="isabled" class="sty_left sex">女</el-radio>
          </el-form-item>

          <el-form-item
            label="民族"
            prop="nation"
            :rules="[
      { required: true, message: '民族不能为空'}
    ]"
          >
            <el-input type="ID" v-model="ruleForm.nation" autocomplete="off" :disabled="isabled"></el-input>
          </el-form-item>

          <el-form-item label="专业" prop="uni">
            <uni @transferUser="getData" :disabled="isabled" class="sty_left"></uni>
          </el-form-item>

          <el-form-item label="身份证号码" prop="IDcard">
            <el-input v-model="ruleForm.IDcard" :disabled="isabled"></el-input>
          </el-form-item>

          <el-form-item label="手机号码" prop="phoneNumber">
            <el-input v-model="ruleForm.phoneNumber" :disabled="isabled"></el-input>
          </el-form-item>

          <el-form-item label="班级" prop="group">
            <el-input
              autocomplete="off"
              maxlength="4"
              placeholder="例：1605"
              v-model="ruleForm.class"
              :disabled="isabled"
            ></el-input>
          </el-form-item>

          <el-form-item label="建行卡号" prop="card_number">
            <el-input
              autocomplete="off"
              maxlength="19"
              type="card_number"
              v-model="ruleForm.card_number"
              :disabled="isabled"
              placeholder="请填写银行卡号"
            ></el-input>
          </el-form-item>

          <el-form-item class="submit">
            <el-button type="primary" @click="change_info()" size="medium" class="butt">修改信息</el-button>
            <el-button @click="submitForm('ruleForm')" size="medium" class="butt">提交信息</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import uni from "@/components/common/uni.vue";
export default {
  data() {
    var id = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入学号"));
      } else if (this.ruleForm.id.length !== 12) {
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
    var phoneNumber = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号码"));
      } else if (!reg.test(this.ruleForm.phoneNumber)) {
        callback(new Error("手机号码格式错误!"));
      } else {
        callback();
      }
    };
    var group = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入班级"));
      } else {
        callback();
      }
    };
    var card_number = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入建行卡号"));
      } else {
        callback();
      }
    };
    // {"phoneNumber":"11011112365","gender":"男","nation":"汉族","name":"Jack","idCardNumber":"软件工程","id":"201602801111","department":"软件学院"}
    return {
      ruleForm: {
        id: "",
        name: "",
        pass: "",
        checkPass: "",
        IDcard: "",
        phoneNumber: "",
        nation: "",
        uni: "",
        gender: "男",
        group: "",
        card_number: ""
      },
      rules: {
        id: [{ validator: id, trigger: "blur" }],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        IDcard: [{ validator: IDcard, trigger: "blur" }],
        phoneNumber: [{ validator: phoneNumber, trigger: "blur" }],
        group: [{ validator: group, trigger: "blur" }],
        card_number: [{ validator: card_number, trigger: "blur" }]
      },
      isabled: true
    };
  },
  mounted() {
    this.$apis.getUserData().then(res => {
      this.ruleForm = res.data;
    });
  },
  methods: {
    getData(msg) {
      this.ruleForm.uni = msg;
    },
    change_info() {
      this.isabled = false;
    },
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
            if (res.data.status === "1") {
              this.$message({
                showClose: true,
                message: "修改成功！",
                type: "success"
              });
            } else if (res.data.status === "0") {
              this.$message({
                showClose: true,
                message: "修改失败",
                type: "warning"
              });
            }
          });
        }
      });
    }
  },

  components: {
    uni
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
.sty_left {
  float: left;
  display: block;
}
.sex {
  line-height: 30px;
}
.butt {
  padding: 10px 50px;
  margin: 10px 45px;
}
</style>
