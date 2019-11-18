<!--  -->
<template>
  <div>
    <el-container>
      <el-header>
        <img src="../../public/img/topbt.png" alt />
        <div class="exit">
          <span>当前用户：</span>
          <span>giao哥</span>
          <el-button type="danger" plain size="small" style="margin-left:10px">安全退出</el-button>
        </div>
      </el-header>
      <el-container class="contain">
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu default-active="2" class="el-menu-vertical-demo">
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-user"></i>
                    <span>个人信息</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">查看个人信息</el-menu-item>
                    <el-menu-item index="1-2">修改个人信息</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-3">
                    <template slot="title">账户安全</template>
                    <el-menu-item index="1-3-1">修改密码</el-menu-item>
                    <el-menu-item index="1-3-2">注销账户</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="1">
                  <i class="el-icon-search"></i>
                  <span>查询获奖情况</span>
                </el-menu-item>

                <el-menu-item index="3">
                  <i class="el-icon-document-remove"></i>
                  <span>申请</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>

        <el-main>
          <el-carousel :interval="3000" type="card" height="244px">
            <el-carousel-item v-for="item in imagesbox" :key="item.id">
              <img :src="item.idView" class="banner">
            </el-carousel-item>
          </el-carousel>
          <img src="../../public/img/topbt.png" alt class="bgImg" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagesbox: [
        { id: 0, idView: require("../../public/img/1.png") },
        { id: 1, idView: require("../../public/img/2.jpg") },
        { id: 2, idView: require("../../public/img/3.jpg") },
        { id: 3, idView: require("../../public/img/4.jpg") }
      ]
    };
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.el-header,
.el-footer {
  background-color: rgb(217, 236, 255);
  color: #333;
  text-align: center;
  line-height: 60px;
  img {
    height: 58px;
    float: left;
    margin-left: 180px;
  }
  .exit {
    float: right;
  }
}

.el-aside {
  color: #333;
  text-align: center;
  height: 10000px;
}
.contain {
  overflow: hidden;
}
.el-main {
  background-color: #f6f6f6;
  color: #333;
  text-align: center;
  height: 10000px;
  .bgImg {
    position: fixed;
    right: 0;
    top: 82%;
    width: 700px;
    opacity: 0.6;
  }
}
.el-col-12 {
  width: 101%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.banner{
  width: 100%;
}
</style>
