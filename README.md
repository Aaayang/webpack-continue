# webpack-continue
### 01_start（开始）
运行webpack命令，默认会找配置文件webpack.config.js，如果修改配置文件名为webpack.config.dev.js，则修改package.json配置如下：
``` javascript
"dev": "webpack --config webpack.config.dev.js",
```
```
const path = require("path");

module.exports = {
    entry: "./src/app.js",// 入口
    output: {
        path: path.resolve(__dirname, "dist"),// 输出绝对路径
        filename: "main.js"// 输出文件名
    }
};
```
### 02_plugin（插件）
```
plugins: [
    new HtmlWebpackPlugin({
        filename: "aaayang.html",// 输出文件名
        template: "src/index.html"// 以哪个文件作为输出模板
    })
]
```
### 03_loader(使用React)
React依赖
```
babel-loader
babel-core
babel-preset-react
```
配置loader
```
module: {
    rules: [
        {
            test: /\.js/,
            use: [
                {
                    loader: "babel-loader",// 处理模块的某部分内容
                    options: {
                        presets: ["react"]// 预设
                    }
                }
            ]
        }
    ]
}
```
### 04_devserver(开发服务器)
会把项目打包放在内存中
```
安装webpack-dev-server
```
配置package.json
```
"start": "webpack-dev-server --config webpack.config.dev.js"
```
修改打包输出文件名为index.html，是服务器默认的访问文件，不然会找不到
```
plugins: [
    new HtmlWebpackPlugin({
        filename: "index.html",// 注意这里输出文件名该为了index.html，是服务器默认访问的文件
    })
]
```
配置服务器
```
devServer: {// webpack-dev-server配置
    open: true,// 自动打开浏览器
    port: 9000
}
```
### 05_cssloader(使用CSS)
CSS依赖，注意配置时两个loader是有先后顺序的
```
style-loader
css-loader
```
使用方法
```
import "./main.css";
```

