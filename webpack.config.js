var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    target: 'web',
    mode: 'development',
    entry: {
        main: './src/main.js'
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js'
    },
    resolve: {
        alias: {

        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [ {
                  loader: 'html-loader',
                  options: {
                    minimize: false
                  }
                }]
            },
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader'
              }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('created by chhuangxiaolong@jd.com')
    ]
};
