const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "assets/js/main.js",
        // 所有资源的基础路径，一定是要以“/”结尾
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",// 输出文件名
            template: "src/index.html"// 以哪个文件作为输出模板
        }),
        new CleanWebpackPlugin(["dist"])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        module: true,// 开启模块化
                        localIdentName: "[name]-[local]_[hash:base64:6]"
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
            },
            {
                test: /\.scss$/,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        module: true,// 开启模块化
                        localIdentName: "[name]-[local]_[hash:base64:6]"
                        // localIdentName: "[path]-[name]-[local]-[hash:base64:6]"
                    }
                }, "sass-loader"],
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "src/common")
                ]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                include: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "src/common")
                ]
            },
            {
                test: /\.less$/,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        module: true,// 开启模块化
                        localIdentName: "[name]-[local]_[hash:base64:6]"
                        // localIdentName: "[path]-[name]-[local]-[hash:base64:6]"
                    }
                }, "less-loader"],
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "src/common")
                ]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
                include: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "src/common")
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,// 只有小于10KB的才会直接是Base64
                            name: "assets/img/[name]_[hash:8].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2|otf)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "assets/fonts/[name]_[hash:8].[ext]"
                    }
                }]
            }
        ]
    },
    devServer: {// webpack-dev-server配置
        open: true,// 自动打开浏览器
        port: 9000,
        contentBase: "./src/common",// 找不到内存资源时，会到此目录下查找
        // 所有资源会在“/”路径下查找
        publicPath: "/"// 不会管output设置的publicPaht了
    }
};