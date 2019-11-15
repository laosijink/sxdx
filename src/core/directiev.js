export default (Vue) => {
    // console.log(Vue);

    Vue.directive("test",(el,binding,vnode) => {
        el.onclick = function(){
            alert("OK");
        }
    })
}