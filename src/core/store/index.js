import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user_info:[]
  },
  mutations:{
    getInfo(state){
      this.$apis.getUserData().then((res)=>{
        console.log(res);
        state.user_info = res.data;
      })
    }
  }
});