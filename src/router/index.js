import Vue from "vue";
import VueRouter from "vue-router";
import params from "@/core/api/params";



Vue.use(VueRouter);



const routes = [{
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    children: [{
        path: "index",
        component: () => import("@/components/index.vue"),
        meta: {
          title: "首页",
          uname: "yuxia",
          keepAlive:false
        }
      }]
}];
const router = new VueRouter({
  // mode:"history",
  routes
});

export default router;