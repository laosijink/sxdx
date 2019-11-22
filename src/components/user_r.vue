<!--  -->
<template>
  <div>
    <el-container>
      <el-header>
        <img src="../../public/img/topbt.png" alt />
        <div class="exit">
          <span>当前用户：</span>
          <span>{{this.$store.state.currentUser}}</span>
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
                    <el-menu-item index="1-1" @click="change_show('root_info')">查看个人信息</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-3">
                    <template slot="title">账户安全</template>
                    <el-menu-item index="1-3-1" @click="change_show('pwd')">修改密码</el-menu-item>
                  </el-submenu>
                </el-submenu>

                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-user"></i>
                    <span>教师信息</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1" @click="change_show('')">查看教师信息</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-user"></i>
                    <span>学生信息</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1" @click="change_show('')">查看学生信息</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-user"></i>
                    <span>文件管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="4-1" @click="change_show('file')">查看文件</el-menu-item>
                    <el-menu-item index="4-2" @click="change_show('addfile')">文件上传</el-menu-item>
                    
                  </el-menu-item-group>
                </el-submenu>

              </el-menu>
            </el-col>
          </el-row>
        </el-aside>

        <el-main>
          <img src="../../public/img/topbt.png" alt class="bgImg" />
          <component :is="isStr"></component>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import banner from "./common/banner.vue";
import pwd from "./common/pwd.vue";
import root_info from "./common/root_info.vue";
import file from "./common/file.vue";
import addfile from "./common/addfile.vue";
export default {
  data() {
    return {
      isStr: "banner"
    };
  },
  mounted(){
    this.isLogo()
  },
  methods: {
    change_show(isStr) {
      this.isStr = isStr;
    },
    isLogo() {
          if (sessionStorage.getItem('userName')) {
            this.$store.commit('userStatus',sessionStorage.getItem('userName'))
          }else{
            this.$router.push("/login");
          }
        },
  },
  components: {
    banner,
    pwd,
    root_info,
    file,
    addfile
  }
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
