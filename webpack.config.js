const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  inject: 'body'
})
const webpack = require('webpack');
const APP_DIR = path.resolve(__dirname, '/client');
module.exports = {
	entry: {
		vendor: [
		'react-dom',
		'react'
		],
		bundle: './client/index.js',
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output : {
		path: path.resolve('dist'),
		filename: '[name].js',
	},
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
	},
	plugins: [HtmlWebpackPluginConfig]
};
