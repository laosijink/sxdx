<template>
  <el-card class="box-card">
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="文件名" prop="name"></el-table-column>
      <el-table-column label="时间" prop="time"></el-table-column>
      <el-table-column align="right" prop="url">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
            <el-link type="primary" :href="scope.row.url" target="blank">查看</el-link>
      </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      search: ""
    };
  },
  mounted() {
    this.$apis.getIndexData().then(res => {
      this.tableData = res.data;
    });
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style lang="scss" scoped>
.box-card {
  width: 70%;
  margin: 0 auto;
}
</style>