import Vue from 'vue';
import axios from "axios";
import { Loading } from 'element-ui';
let loading;
var instance = axios.create({
    baseURL: "",
    timeout: 10000,
    transformRequest: [
        function (data) {

            return data;
        }
    ],
    transformResponse: [
        function (data) {

            return data;
        }
    ],
    responseType: 'json',
});

// 什么是拦截器  项目里面所有的请求发送前
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //打开loading
    // loading = Loading.service({
    //     lock: true,
    //     text: '加载中……',
    //     background: 'rgba(0, 0, 0, 0.7)'
    //   });
    // config.headers.token="xxxxxxsalkfhsdjkfh"
    // 加入一些通用配置 通用参数
    // console.log(config)

    return config;
}, function (error) {
    // 对请求错误做些什么

    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // loading.close();
    // console.log(response)
    //关闭loading
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance; //类似  $.ajax




/*
instance({
    method:"get",
    url:"/1.jpg",
    设置返回数据类型
    headers:{
        content-type:json
    }
    responseType: 'blob'
    data:{

    }
})

instance.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
  }));
*/