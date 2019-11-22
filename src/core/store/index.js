import Vue from "vue";
import Vuex from "vuex";
import Store from "storejs";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        currentUser: null, //当前用户
        // isLogin:false    //判断当前用户是否已经登录
    },
    getters: {
        currentUser: function (state) {
            return state.currentUser
        },
    },
    mutations: {
        userStatus(state, user) {
            if (user) {
                state.currentUser = user
                //    state.isLogin = true
            } else if (user == null) {
                //退出的时候清空sessionStorage里的东西
                sessionStorage.setItem('userName', null);
                //  sessionStorage.setItem('userToke','');
                state.currentUser = null;
                //  state.isLogin = false;
            }
        },
    },
    actions: {
        setUser({
            commit
        }, user) {
            commit('userStatus', user)
            console.log(this.state.currentUser)
        }
    }
});