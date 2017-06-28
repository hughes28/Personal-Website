const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  inject: 'body'
})
const webpack = require('webpack');
const APP_DIR = path.resolve(__dirname, '/client');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: {
		vendor: [
		'react-dom',
		'react'
		],
		bundle: './client/index.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.less']
	},
	output : {
		path: path.resolve('docs'),
		filename: '[name].js',
	},
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.(jpeg|jpg|png|pdf|woff|woff2|eot|ttf|svg|otf)$/, loader: 'url-loader?limit=100000', exclude: /node_modules/},
        ],
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin( "bundle.css" ),
    ]
};
