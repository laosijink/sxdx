
<template>
  <div>
    <el-card class="box-card">
      <el-button type="primary" icon="el-icon-search" @click="doFilter" style="float:right">搜索</el-button>
      <el-input v-model="tableDataName" placeholder="输入查询" style="width:240px;float:right"></el-input>

      <el-table
        :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        style="width: 100%"
        height="600px"
        :default-sort="{prop: 'date', order: 'descending'}"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="身份证号码">
                <span>{{ props.row.IDcard }}</span>
              </el-form-item>
              <el-form-item label="手机号码">
                <span>{{ props.row.phoneNumber }}</span>
              </el-form-item>
              <el-form-item label="民族">
                <span>{{ props.row.nation}}</span>
              </el-form-item>
              <el-form-item label="专业">
                <span>{{ props.row.major }}</span>
              </el-form-item>
              <el-form-item label="建行卡号">
                <span>{{ props.row.card_number }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="学号" prop="id" sortable></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="性别" prop="gender"></el-table-column>
        <el-table-column label="班级" prop="clazz" sortable></el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount"
        ></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableDataName: "",
      tableData: [],
      currentPage: 1,
      totalCount: 1,
      pageSize: 10,
      filterTableDataEnd: [],
      flag: false,
    };
  },
   created:function(){
         this.getData() 
   },
  mounted() {
    
  },

  methods: {
    getData() {
      // 这里使用axios，使用时请提前引入
      this.$apis.allStudent().then(res => {
      console.log(res);
      this.tableData = res.data;
      this.totalCount = res.data.length;
    });
          // 将数据的长度赋值给totalCount
          
        
    },
    // 分页
    // 每页显示的条数
    handleSizeChange(val) {
      // 改变每页显示的条数
      this.pageSize = val;
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage = 1;
    },
    // 显示第几页
    handleCurrentChange(val) {
      // 改变默认的页数
      this.currentPage = val;
    },
    //前端搜索功能需要区分是否检索,因为对应的字段的索引不同
    //用两个变量接收currentChangePage函数的参数
    doFilter() {
      if (this.tableDataName == "") {
        this.$message.warning("查询条件不能为空！");
        return;
      }
      this.tableDataEnd = [];
      //每次手动将数据置空,因为会出现多次点击搜索情况
      this.filterTableDataEnd = [];
      this.tableDataBegin.forEach((value, index) => {
        if (value.name) {
          if (value.name.indexOf(this.tableDataName) >= 0) {
            this.filterTableDataEnd.push(value);
          }
        }
        if (value.id) {
          if (value.id.indexOf(this.tableDataName) >= 0) {
            this.filterTableDataEnd.push(value);
          }
        }
        if (value.clazz) {
          if (value.clazz.indexOf(this.tableDataName) >= 0) {
            this.filterTableDataEnd.push(value);
          }
        }
        if (value.IDcard) {
          if (value.IDcard.indexOf(this.tableDataName) >= 0) {
            this.filterTableDataEnd.push(value);
          }
        }
        if (value.nation) {
          if (value.nation.indexOf(this.tableDataName) >= 0) {
            this.filterTableDataEnd.push(value);
          }
          if (value.major) {
            if (value.major.indexOf(this.tableDataName) >= 0) {
              this.filterTableDataEnd.push(value);
            }
          }
          if (value.card_number) {
            if (value.card_number.indexOf(this.tableDataName) >= 0) {
              this.filterTableDataEnd.push(value);
            }
          }
        }
      });
      //页面数据改变重新统计数据数量和当前页
      this.currentPage = 1;
      this.totalItems = this.filterTableDataEnd.length;
      //渲染表格,根据值
      this.currentChangePage(this.filterTableDataEnd);
      //页面初始化数据需要判断是否检索过
      this.flag = true;
    },
    
    currentChangePage(list) {
      let from = (this.currentPage - 1) * this.pageSize;
      let to = this.currentPage * this.pageSize;
      this.tableDataEnd = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tableDataEnd.push(list[from]);
        }
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
