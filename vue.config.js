var path = require("path");
var webpack = require("webpack");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    // 静态资源配置相对绝对路径
    publicPath: "./",
    // 配置代理
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        // proxy: {
        //     "/apis": {
        //         target: "https://cnodejs.org",
        //         changeOrigin: true,
        //         pathRewrite: {
        //             "^/apis": ""
        //         }
        //     }
        // }
    },
    // 设置别名
    chainWebpack: config => {
        config.resolve.alias.set("@", resolve("src"));
    },
    // 设置插件
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ]
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
            @import "~@/assets/css/index.scss";	
           `
            }
        }
    }
};