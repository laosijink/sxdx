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
                    <el-menu-item index="1-1" @click="change_show('user_info')">查看个人信息</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-3">
                    <template slot="title">账户安全</template>
                    <el-menu-item index="1-3-1" @click="change_show('pwd')">修改密码</el-menu-item>
                    <el-menu-item index="1-3-2" @click="change_show('logout')">注销账户</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="1" @click="change_show('s_price')">
                  <i class="el-icon-search"></i>
                  <span>查询获奖情况</span>
                </el-menu-item>

                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-user"></i>
                    <span>申请</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1" @click="change_show('apply')">填写申请信息</el-menu-item>
                    <el-menu-item index="3-2" @click="change_show('down')">下载申请表</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                

                 <el-menu-item index="4" @click="change_show('file')">
                  <i class="el-icon-search"></i>
                  <span>查看文件</span>
                </el-menu-item>

                <!-- <el-menu-item index="3" @click="change_show('apply')">
                  <i class="el-icon-document-remove"></i>
                  <span>申请</span>
                </el-menu-item>-->
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
// {"phoneNumber":"11011112365","gender":"男","nation":"汉族","name":"Jack","idCardNumber":"软件工程","id":"201602801111","department":"软件学院"}
import axios from "axios";
import user_info from "./common/user_info.vue";
import apply from "./common/apply.vue";
import banner from "./common/banner.vue";
import pwd from "./common/pwd.vue";
import logout from "./common/logout.vue";
import s_price from "./common/s_price.vue";
import down from "./common/down.vue";
import file from "./common/file.vue";
export default {
  data() {
    return {
      isStr: "banner",
      user_info: []
    };
  },
  mounted() {
  },
  methods: {
    change_show(isStr) {
      this.isStr = isStr;
    }
  },
  components: {
    apply,
    banner,
    user_info,
    pwd,
    logout,
    s_price,
    down,
    file
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
    position: absolute;
    right: 0;
    top: 82%;
    width: 50%;
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
</style>
