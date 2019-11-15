import directive from "./directiev.js";
import Apis from "@/core/api/apis.js";
export default (Vue) => {
    // console.dir(Vue);
    directive(Vue);
    Vue.prototype.$eventBus = new Vue();
    Vue.prototype.$apis = Apis;
}                     