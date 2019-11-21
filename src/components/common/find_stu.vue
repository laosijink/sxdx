
<template>
  <div>
    <el-card class="box-card">
      <el-input v-model="tableDataName" placeholder="请输入姓名" style="width:240px"></el-input>
    <el-button type="primary" @click="doFilter">搜索</el-button>

      <el-table
        :data="tableDataEnd"
        style="width: 100%"
        height="600px"
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
        <el-table-column label="学号" prop="id"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="性别" prop="gender"></el-table-column>
        <el-table-column label="班级" prop=" clazz"></el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalItems">
    </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
     tableDataName: "",
        tableDataEnd: [],
        currentPage: 4,
        pageSize: 10,
        totalItems: 0,
        filterTableDataEnd:[],
        flag:false,
      tableDataBegin: [],
       
    };
  },
  created() {
      this.totalItems = this.tableDataBegin.length;
      if (this.totalItems > this.pageSize) {
        for (let index = 0; index < this.pageSize; index++) {
          this.tableDataEnd.push(this.tableDataBegin[index]);
        }
      } else {
        this.tableDataEnd = this.tableDataBegin;
      }
    },
  mounted() {
    this.$apis.allStudent().then(res => {
      console.log(res)
      this.tableDataEnd = res.data;
    });
  },
  methods: {
      //前端搜索功能需要区分是否检索,因为对应的字段的索引不同
      //用两个变量接收currentChangePage函数的参数
      doFilter() {
        if (this.tableDataName == "") {
          this.$message.warning("查询条件不能为空！");
          return;
        }
        this.tableDataEnd = []
        //每次手动将数据置空,因为会出现多次点击搜索情况
        this.filterTableDataEnd=[]
        this.tableDataBegin.forEach((value, index) => {
          if(value.name){
            if(value.name.indexOf(this.tableDataName)>=0){
              this.filterTableDataEnd.push(value)
            }
          }
        });
        //页面数据改变重新统计数据数量和当前页
        this.currentPage=1
        this.totalItems=this.filterTableDataEnd.length
        //渲染表格,根据值
        this.currentChangePage(this.filterTableDataEnd)
        //页面初始化数据需要判断是否检索过
        this.flag=true
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.handleCurrentChange(this.currentPage);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
        //需要判断是否检索
        if(!this.flag){
        //tableDataBegin不能写成tableDataEnd，不然在没有进行搜索功能的时候，不能进行分页操作，数据丢失
          this.currentChangePage(this.tableDataBegin)
        }else{
          this.currentChangePage(this.filterTableDataEnd)
        }
      }, //组件自带监控当前页码
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
