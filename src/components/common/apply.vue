<template>
  <div>
    <el-card class="box-card">
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        status-icon
        size="small"
      >
        <el-form-item label="学号" prop="ID">
          <el-input type="ID" v-model="userInfo.id" autocomplete="off" maxlength="12"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="userInfo.name"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-radio v-model="userInfo.gender" label="男" class="sty_left sex">男</el-radio>
          <el-radio v-model="userInfo.gender" label="女" class="sty_left sex">女</el-radio>
        </el-form-item>

        <el-form-item label="民族" prop="nation" :rules="[
      { message: '民族不能为空'}
    ]">
          <el-input type="ID" v-model="userInfo.nation" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="专业" prop="uni">
          <uni @transferUser="getData" class="sty_left"></uni>
        </el-form-item>

        <el-form-item label="身份证号码" prop="IDcard">
          <el-input v-model="userInfo.IDcard"></el-input>
        </el-form-item>

        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="userInfo.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="申请内容" prop="content">
          <el-select v-model="value" filterable placeholder="请选择" class="sty_left">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="班级" prop="group" :rules="[
      { message: '班级不能为空'}
    ]">
          <el-input autocomplete="off" maxlength="4" placeholder="例：1605" v-model="ruleForm.class"></el-input>
        </el-form-item>

        <el-form-item label="建行卡号" prop="bank" :rules="[
      { message: '建行卡号不能为空'}
    ]">
          <el-input autocomplete="off" maxlength="19" type="bank" v-model="ruleForm.card_number"></el-input>
        </el-form-item>

        <el-form-item label="申请时间" prop="time">
          <el-date-picker
            v-model="ruleForm.apply_time"
            type="date"
            class="input-class sty_left"
            :disabled="true"
          ></el-date-picker>
          
        </el-form-item>
        <el-form-item class="submit">
          <el-button type="primary" @click="submitForm('ruleForm')" size="medium" class="butt">提交</el-button>
          <el-button @click="resetForm('ruleForm')" size="medium" class="butt">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import uni from "@/components/common/uni.vue";

export default {
  data() {
    return {
      ruleForm: {
        class: "",
        card_number: "",
        apply_time: "",
        awards_ID: "奖学金"
      },
      userInfo: {
        id: "",
        name: "",
        IDcard: "",
        phoneNumber: "",
        nation: "",
        uni: "",
        gender: "男"
      },
      // {"phoneNumber":"11011112365","gender":"男","nation":"汉族","name":"Jack","idCardNumber":"软件工程","id":"201602801111","department":"软件学院"}
      options: [
        {
          value: "奖学金",
          label: "奖学金"
        },
        {
          value: "助学金",
          label: "助学金"
        },
        {
          value: "助学贷款",
          label: "助学贷款"
        }
      ],
      value:""
    };
  },
  mounted() {
    let that = this;
    that.getdatatime();
    this.$apis.getUserData().then(res => {
      this.userInfo = res.data;
    });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = this.ruleForm;
          axios({
            method: "post",
            url: "/student/apply",
            withCredentials: true,
            data: data
          }).then(res => {
            if (res.data.status === "1") {
              this.$message({
                showClose: true,
                message: "提交成功！",
                type: "success"
              });
            } else if (res.data.status === "0") {
              this.$message({
                showClose: true,
                message: "提交失败",
                type: "warning"
              });
            }
          });
        }
      });
    },
    getdatatime() {
      //默认显示今天
      this.ruleForm.apply_time = new Date();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getData(msg) {
      this.ruleForm.uni = msg;
    },
  },
  components: {
    uni
  }
};
</script>

<style lang='scss' scoped>
.box-card {
  width: 70%;
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
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.el-col-12 {
  width: 50%;
  float: right;
}
</style>
