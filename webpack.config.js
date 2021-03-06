var webpack = require('webpack');
const path = require('path');
// const utils = require('./utils')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    devtool: 'source-map',
    target: 'web',
    mode: 'development',
    entry: {
        main: './src/main.js'
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].[chunkhash].js',
        publicPath: './',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        alias: {},
        mainFields: ['module', 'main']
    },
    optimization: {
        usedExports: true
    },
    module: {
        rules: [{
                test: /\.html$/,
                use: [{
                    loader: 'html-loader', // 加载.html文件
                    options: {
                        minimize: false
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // {
                    //     loader: "style-loader"
                    //   },
                    // { loader: "file-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            // url: true, // 是否忽略css-loader对url的解析，如果忽略则不会触发url-loader或者file-loader
                            minimize: true
                        }
                    }

                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            minimize: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    }, // 自动添加前缀
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1,
                        name: 'img/[name].[hash:17].[ext]'
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader' // es6，es7，es8语法转es5，option配置见.babelrc
                }
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin('created by chhuangxiaolong@jd.com'),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash:8].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname + '/index.html')
        })
    ]
};
