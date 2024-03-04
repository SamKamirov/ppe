const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlPlugin = require('html-webpack-plugin');
const {template} = require('@babel/core');

module.exports = {
    entry: '/src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
        publicPath: '/',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlPlugin({
            template: 'src/index.html',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src',
                    globOptions: {
                        ignore: ['**/index.html'],
                    },
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [autoprefixer],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(woff|ttf)$/,
                use: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
