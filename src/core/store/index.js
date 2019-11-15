import Vue from "vue";
import Vuex from "vuex";
import apis from "@/core/api/apis"
import indexModel from './indexModel';
import listModel from './listModel';
Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   msg: "yuxia",
  //   name: "苹果",
  //   price: 18,
  //   num: 0,
  //   goodsList: []
  // },
  // mutations: {
  //   add(state, data) {
  //     state.num++;
  //   }
  // },
  // getters: {
  //   count(state) {
  //     return state.num * state.price;
  //   }
  // },
  // actions: {
  //   getTestData(context,data) {
  //     // console.log("run");
  //     // console.log(context);
  //     apis.getTest().then((res) => {
  //       context.state.goodsList = res.data.data;
  //       console.log(context.state.goodsList)
  //     })
  //   }
  // }
  modules:{
    listModel,
    indexModel
  }
});