import Vue from "vue";
import VueRouter from "vue-router";
import params from "@/core/api/params";



Vue.use(VueRouter);



const routes = [{
  path: "/",
  name: "home",
  component: () => import("@/views/Home.vue"),
  children: [{
      path: "login",
      component: () => import("@/components/login.vue"),
      meta: {
        title: "登录",
        keepAlive: false
      }
    },
    {
      path: "register",
      component: () => import("@/components/register.vue"),
      meta: {
        title: "注册",
        keepAlive: false
      }
    },
    {
      path: "user_s",
      component: () => import("@/components/user_s.vue"),
      meta: {
        title: "学生端",
        keepAlive: false
      }
    },
    {
      path: "user_t",
      component: () => import("@/components/user_t.vue"),
      meta: {
        title: "教师端",
        keepAlive: false
      }
    },
    {
      path: "user_r",
      component: () => import("@/components/user_r.vue"),
      meta: {
        title: "管理员端",
        keepAlive: false
      }
    },
  ],
  redirect: "login"
}];
const router = new VueRouter({
  // mode:"history",
  routes
});

export default router;