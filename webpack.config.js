const path = require('path');
const vueLoaderConfig = require('./build/vue-loader.conf');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = {
    // module: {
    //     rules: utils.styleLoaders({
    //       sourceMap: config.build.productionSourceMap,
    //       extract: true,
    //       usePostCSS: true
    //     })
    //   },
    devtool: '#source-map',
    // 程序入口
    entry: {
        app: './src/main.js'
    },
    // 出口 chunk
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'helloworld.min.js'
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
            parallel: true
        }),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: '/css/[name].[contenthash].css',
            // Setting the following option to `false` will not extract CSS from codesplit chunks.
            // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
            // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`, 
            // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
            allChunks: true,
        }),
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    // 解析规则
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '/media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    }
}