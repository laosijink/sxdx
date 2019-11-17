import Vue from "vue";
import VueRouter from "vue-router";
import params from "@/core/api/params";



Vue.use(VueRouter);



const routes = [{
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "login",
        component: () => import("@/components/login.vue"),
        meta: {
          title: "登录",
          keepAlive:false
        }
      },
      {
        path: "register",
        component: () => import("@/components/register.vue"),
        meta: {
          title: "注册",
          keepAlive:false
        }
      },
    ],
    redirect:"login"
}];
const router = new VueRouter({
  // mode:"history",
  routes
});

export default router;