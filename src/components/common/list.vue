<template>
  <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%" class="file">
    <el-table-column
      prop="address"
      label="评审管理制度">
    </el-table-column>
    
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .file{
    background: rgba($color: #fff, $alpha: 0.8)!important;
  }
  .el-table th, .el-table tr {
    background-color:transparent!important;
}
</style>