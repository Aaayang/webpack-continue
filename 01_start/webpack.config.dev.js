const path = require("path");

module.exports = {
    entry: "./src/app.js",// 入口
    output: {
        path: path.resolve(__dirname, "dist"),// 输出绝对路径
        filename: "main.js"// 输出文件名
    }
};