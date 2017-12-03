const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",// 输出文件名
            template: "src/index.html"// 以哪个文件作为输出模板
        })
    ],
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["react"]// 预设
                        }
                    }
                ]
            }
        ]
    },
    devServer: {// webpack-dev-server配置
        open: true,// 自动打开浏览器
        port: 9000
    }
};