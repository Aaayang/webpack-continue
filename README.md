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
### 06_imgloader(使用图片)
注意最后生成的是一个路径，例如3bf9b71c6abcf402e5327795bd7c74e2.jpg
安装loader
```
cnpm i file-loader -D
```
配置loader
```
{
    test: /\.jpg$/,
    use: ["file-loader"]
}
```
除了background直接引入图片外，也可以使用下面方式使用图片，利用的也是file-loader
```
import qsmy from "./common/img/qsmy.jpg";
<img src={qsmy} alt=""/>
```
```
const ayan = require("./common/img/ayan.png");
<img src={ayan} width="300" alt=""/>
```
### 07_urlloader(优化图片加载)
默认会把所有图片以base64使用
```
{
    test: /\.(jpg|png|gif|jpeg)$/,
    use: [
        {
            loader: "url-loader",
            options: {
                limit: 10000// 只有小于10KB的才会直接是Base64
            }
        }
    ]
}
```
### 08_fontloader(使用字体)
使用的也是file-loader
```
{
    test: /\.(ttf|eot|svg|woff|woff2|otf)$/,
    use: ["file-loader"]
}
```
使用第三方字体
```
cnpm install font-awesome -S
import "font-awesome/css/font-awesome.css";
<div className="fa fa-rocket">hello world</div>
```
### 09_cssmodule(CSS模块化)
开启CSS模块化后，每个单独的CSS文件都是一个模块，互不影响，同时CSS的引入和使用方式都变了
```
// 开启
{
    test: /\.css$/,
    use: ["style-loader", {
        loader: "css-loader",
        options: {
            module: true,// 开启模块化
        }
    }]
}
```
```
// 模块化的引入方式，普通的引入方式直接import...
import style from "./common/style/main.css";
```
```
// 使用
<div className={style.ot}>hello world</div>
```
继续...

指定文件夹中的内容不要开启模块化，例如import "font-awesome/css/font-awesome.css"，下面配置的意思是node_modules和src/common两个目录不适用CSS模块化，其他目录都使用
```
{
    test: /\.css$/,
    use: ["style-loader", {
        loader: "css-loader",
        options: {
            module: true,// 开启模块化
            localIdentName: "[name]-[local]_[hash:base64:6]"// 模块化后CSS类名配置
            // localIdentName: "[path]-[name]-[local]-[hash:base64:6]"
        }
    }],
    exclude: [
        path.resolve(__dirname, "node_modules"),
        path.resolve(__dirname, "src/common")
    ]
},
{
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
    include: [
        path.resolve(__dirname, "node_modules"),
        path.resolve(__dirname, "src/common")
    ]
}
```
### 10_sass&less
安装sass/less依赖
```
sass-loader
node-sass

less-loader
less
```
配置
```
{
    test: /\.scss$/,
    use: ['style-loader','css-loader','sass-loader']
}
```
### 11_babel
如果不想全局安装babel，又想使用babel命令，可以配置package.json如下：
```
"babel": "./node_modules/.bin/babel src/app.js"
```
或
```
"babel": "babel src/app.js"
```
<br/>
<br/>
例如专门处理箭头函数的插件
```
babel-plugin-transform-es2015-arrow-functions
```
修改配置如下：
```
"babel": "babel src/app.js --plugins transform-es2015-arrow-functions"
```
<br/>
<br/>
```
babel-plugin-transform-es2015-classes
```
```
"babel": "babel src/app.js --plugins=transform-es2015-arrow-functions,transform-es2015-classes"
```
<br/>
<br/>
也可以配置.babelrc
```
{
    "plugins": [
        "transform-es2015-arrow-functions",
        "transform-es2015-classes"
    ]
}
```
这时候package.json
```
"babel": "babel src/app.js"
```
<br/>
<br/>
预设：相关的插件打包在一起
```
babel-preset-es2015
```
这时候.babelrc配置如下：
```
{
    "presets": [
        "es2015"
    ]
}
```
package.json中可以指定编译生成的目录
```
"babel": "babel src/app.js -o out/main.js"
```
### 12_babelloader
```
// 处理ES6或更高版本的标准的语法的预设（预设包括好多插件）
babel-preset-env
```
```
// 处理展开符（...非标准）的专门插件
babel-plugin-transform-object-rest-spread
```
对应webpack.config.dev.js中的配置
```
{
    test: /\.js$/,
    use: [
        {
            loader: "babel-loader",
            options: {
                presets: ["react", "env"],// 预设
                plugins: ["transform-object-rest-spread"]
            }
        }
    ]
}
```