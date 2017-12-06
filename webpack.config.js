const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const filePath = path.join(__dirname, 'index.js')
const outputPath = path.join(__dirname, 'build')

const config = {
    entry: filePath,
    output: {
        filename: 'bundle-[hash].js',
        path: outputPath,
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /(\.vue)$/,
                use: [
                    { loader: 'babel-loader' },
                    {
                        loader: 'vue-loader',
                        options: {
                            postcss: {
                                plugins: [
                                    require('autoprefixer')({
                                        browsers: ['last 2 versions']
                                    }),
                                    require('precss')
                                ],
                                options: {
                                    parser: require('postcss-scss')
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /(\.js)$/,
                use: { loader: 'babel-loader' },
                exclude: /node_modules/
            },
            {
                test: /(\.css)$/,
                loader: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1',
                    'postcss-loader?sourceMap=inline'
                ]
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: [
                //         {
                //             loader: 'css-loader',
                //             options: {
                //                 modules: true
                //             }
                //         },
                //         {
                //             loader: 'postcss-loader'
                //         }
                //     ]
                // })
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，侵权必究'),
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: {
                    parser: require('postcss-scss'),
                    plugins: [
                        require('autoprefixer')({
                            browsers: ['last 2 versions']
                        }),
                        require('precss')
                    ]
                }
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('style.css')
    ],
    devServer: {
        historyApiFallback: true,
        inline: true
    }
}

module.exports = config


