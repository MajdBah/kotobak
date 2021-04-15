const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const loader = require("sass-loader");

module.exports = {

    entry: './src/js/index.js',
    
    output: {
        
        filename: 'js/bundle.js',
    },

    devServer: {
        compress: true,
        port: 8560,
        writeToDisk: true,
        stats: 'errors-only',
        open: true,
    },

    plugins: [

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),

        new HtmlWebpackPlugin({
            template: './src/book1.html',
            filename: 'book1.html'
        }),

        new HtmlWebpackPlugin({
            template: './src/book2.html',
            filename: 'book2.html'
        }),

        new MiniCssExtractPlugin({
            filename: "css/styles.css"
        }),


    ],

    module: {

        rules: [{
                test: /\.(sass|css|scss)$/,
                use: [

                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },

                    "css-loader",
                    "sass-loader",
                ],
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                    }
                }, ],
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf|otf)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts',
                    }
                }, ],
            },


            {
                test: /\.html$/i,
                loader: 'html-loader',
            },

            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
            },
        ],
    },
};