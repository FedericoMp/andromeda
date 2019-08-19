const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge (common, {

    mode: 'production',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contentHash].bundle.js'
    },

    devtool: 'none',

    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/pages/index.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css'
        }),
                
        new CleanWebpackPlugin()
    ]
});