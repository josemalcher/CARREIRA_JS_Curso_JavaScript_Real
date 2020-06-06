const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.js",
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer:{
        contentBase: "./dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }],
    }
}