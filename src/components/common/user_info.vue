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
          <el-form-item label="学号" prop="ID">
            <el-input
              type="ID"
              v-model="ruleForm.ID"
              autocomplete="off"
              maxlength="12"
              :disabled="isabled"
            ></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" :disabled="isabled"></el-input>
          </el-form-item>

          <el-form-item label="性别" prop="sex">
            <el-radio v-model="ruleForm.radio" label="男" :disabled="isabled" class="sty_left sex">男</el-radio>
            <el-radio v-model="ruleForm.radio" label="女" :disabled="isabled" class="sty_left sex">女</el-radio>
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

          <el-form-item label="手机号码" prop="phone">
            <el-input v-model="ruleForm.phone" :disabled="isabled"></el-input>
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

          <el-form-item label="建行卡号" prop="bank">
            <el-input
              autocomplete="off"
              maxlength="19"
              type="bank"
              v-model="ruleForm.card_number"
              :disabled="isabled"
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
    var group = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入班级"));
      } else {
        callback();
      }
    };
    var bank = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入建行卡号"));
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
        radio: "男",
        group: "",
        bank:""
      },
      rules: {
        ID: [{ validator: ID, trigger: "blur" }],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        IDcard: [{ validator: IDcard, trigger: "blur" }],
        phone: [{ validator: phone, trigger: "blur" }],
        group: [{ validator: group, trigger: "blur" }],
         bank: [{ validator: group, trigger: "blur" }]
      },
      isabled: true
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getData(msg) {
      this.ruleForm.uni = msg;
    },
    change_info() {
      this.isabled = false;
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
