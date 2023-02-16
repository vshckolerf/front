const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
    },
    entry: {
        schedule: "./js/schedule.js",
        index: "./js/index.js"
    },
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'schedule.html'),
            filename: 'schedule.html',
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'schedule1.html'),
            filename: 'schedule1.html',
            chunks: ['schedule']
        })
    ],
    mode: 'production'
}