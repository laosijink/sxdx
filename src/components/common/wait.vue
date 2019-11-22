
<template>
  <div>
    <el-card class="box-card">
      <el-badge :value="num" class="item" style="float:left">
      <el-popover
        placement="top-start"
        title="提示"
        width="200"
        trigger="hover"
        content="您可以通过多选操作进行审批，请先选择"
      >
      
        <el-button
        slot="reference"
        size="primary"
        type="success"
        @click="dialogTableVisible = true"
        
      >多选操作</el-button>
      
      </el-popover>
      </el-badge>
      
      <el-button type="primary" icon="el-icon-search" @click="doFilter" style="float:right">搜索</el-button>
      <el-tooltip class="item" effect="dark" content="您可输入学生准确信息进行查询" placement="left">
      <el-input v-model="tableDataName" placeholder="输入查询" style="width:240px;float:right"></el-input>
      </el-tooltip>

      <el-dialog title="提交" :visible.sync="dialogTableVisible">
        <el-table :data="multipleTable">
          <el-table-column property="id" label="学号" width="150"></el-table-column>
          <el-table-column property="name" label="姓名" width="200"></el-table-column>
          <el-table-column property="clazz" label="班级"></el-table-column>
        </el-table>
        <el-button size="middle" type="success">通过</el-button>
        <el-button size="middle" type="danger">拒绝</el-button>
      </el-dialog>

      <el-table
        :data="tableDataEnd"
        style="width: 100%"
        height="600px"
        :row-key="getRowKeys"
        ref="multipleTable"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" :reserve-selection="true"></el-table-column>
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
              <el-form-item label="性别">
                <span>{{ props.row.gender }}</span>
              </el-form-item>
              <el-form-item label="建行卡号">
                <span>{{ props.row.card_number }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="学号" prop="id" :sortable="true" :sort-method="sortByDate">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="专业" prop="major"></el-table-column>
        <el-table-column label="班级" prop="clazz" :sortable="true" :sort-method="sortByClass">
          <template slot-scope="scope">{{scope.row.clazz}}</template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="dialogFormAdd()">通过</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalItems"
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
      tableDataEnd: [],
      currentPage: 4,
      pageSize: 10,
      totalItems: 0,
      filterTableDataEnd: [],
      flag: false,
      multipleTable: [],
      dialogTableVisible: false,
      num:"0",
      tableDataBegin: [
        {
          id: "1",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "2",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "3",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "4",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "5",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "6",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "7",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "8",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "9",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "10",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "11",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "12",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "13",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "14",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "15",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "16",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "17",
          name: "tian",
          major: "软件",
          clazz: "1605"
        },
        {
          id: "18",
          name: "tian",
          major: "软件",
          clazz: "1605"
        }
      ],
    };
  },
  created() {
    this.$apis.allStudent().then(res => {
      console.log(res);
      this.tableDataBegin = res.data;
    });

    this.totalItems = this.tableDataBegin.length;
    if (this.totalItems > this.pageSize) {
      for (let index = 0; index < this.pageSize; index++) {
        this.tableDataEnd.push(this.tableDataBegin[index]);
      }
    } else {
      this.tableDataEnd = this.tableDataBegin;
    }
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleTable = val;
      this.num =  this.multipleTable.length;//  this.multipleTable 选中的值
      console.log(val);
    },
    dialogFormAdd() {
      for (var i = 0; i < this.multipleTable.length; i++) {
        var halo = this.multipleTable[i];
        console.log(halo);
        // halo即为选中数组里的值。控制台打印就看得到 拿到了值想如何操作都可以了。
        // this.$axios.post().then(res => {
        //
        // });
      }
    },
    //前端搜索功能需要区分是否检索,因为对应的字段的索引不同
    //用两个变量接收currentChangePage函数的参数
    sortByDate(obj1, obj2) {
      let val1 = obj1.id;
      let val2 = obj2.id;
      return val1 - val2;
    },
    sortByClass(obj1, obj2) {
      let val1 = obj1.clazz;
      let val2 = obj2.clazz;
      return val1 - val2;
    },

    doFilter() {
      if (this.tableDataName == "") {
        this.$message.warning("查询条件不能为空！");
        this.tableDataEnd = this.tableDataBegin;
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.handleCurrentChange(this.currentPage);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      //需要判断是否检索
      if (!this.flag) {
        //tableDataBegin不能写成tableDataEnd，不然在没有进行搜索功能的时候，不能进行分页操作，数据丢失
        this.currentChangePage(this.tableDataBegin);
      } else {
        this.currentChangePage(this.filterTableDataEnd);
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
    },
    getRowKeys(row) {
      return row.id;
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
