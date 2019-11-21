<!--  -->
<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column prop="Time" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="Name" label="奖项">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          Name:"123",
          Time:"123"
        }
      ]
    };
  },
  mounted() {
    this.$apis.getAward().then(res => {
      console.log(res);
      var data = [];
      for(var k=0;k < res.length;k ++){
        var obj = {};
        obj.Name = res[k].name;
        obj.Time = res[k].time;
        data[k] = obj;
      }
      this.tableData =data;
    });
  }
};
</script>

<style lang='scss' scoped></style>
