const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const filePath = path.join(__dirname, '/index.js')
const outputPath = path.join(__dirname, '/build')

const config = {
    entry: filePath,
    output: {
        filename: 'bundle.js',
        path: outputPath,
    },
    resolve: {
        extensions: ['*', '.js', '.vue']
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
                use: ExtractTextPlugin.extract({
                    // fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                  require('postcss-smart-import'),
                                  require('autoprefixer'),
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，侵权必究'),
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('styles.css')
    ],
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        inline: true
    }
}

module.exports = config


