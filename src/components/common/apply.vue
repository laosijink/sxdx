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
          <el-input type="ID" v-model="ID" autocomplete="off" maxlength="12"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="name"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-radio v-model="radio" label="男">男</el-radio>
          <el-radio v-model="radio" label="女">女</el-radio>
        </el-form-item>

        <el-form-item label="民族" prop="nation" :rules="[
      { message: '民族不能为空'}
    ]">
          <el-input type="ID" v-model="nation" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="专业" prop="uni">
          <uni @transferUser="getData"></uni>
        </el-form-item>

        <el-form-item label="身份证号码" prop="IDcard">
          <el-input v-model="IDcard"></el-input>
        </el-form-item>

        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="phone"></el-input>
        </el-form-item>
        <el-form-item label="申请内容" prop="content">
          <el-select v-model="ruleForm.awards_ID" placeholder="请选择">
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

        <el-date-picker
          v-model="ruleForm.apply_time"
          type="date"
          class="input-class"
          :disabled="true"
        ></el-date-picker>

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
      ID: "",
      name: "",
      IDcard: "",
      phone: "",
      nation: "",
      uni: "",
      radio: "男",
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
      ]
    };
  },
  mounted() {
    let that = this;
    that.getdatatime();
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
              message: "申请成功！",
              type: "success"
            });
          });
        } else {
          this.$message({
            showClose: true,
            message: "申请失败！",
            type: "error"
          });
          return false;
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
    }
  },
  components: {
    uni
  }
};
</script>

<style lang='scss' scoped>
.box-card{
    width: 1000px;
    margin: 0 auto;
    margin-top: 40px;
    .demo-ruleForm{
        padding: 30px 40px 30px 40px;
    }
}
</style>
