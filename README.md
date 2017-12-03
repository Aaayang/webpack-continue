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
