<!--  -->
<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column prop="time" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="奖项">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.$apis.getAward().then(res => {
      console.log(res);
      this.tableData = res.data;
      console.log(this.tableData);
    });
  }
};
</script>

<style lang='scss' scoped>
  .box-card {
  width: 70%;
  margin: 0 auto;
}
</style>
