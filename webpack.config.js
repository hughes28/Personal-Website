const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  inject: 'body'
})
const webpack = require('webpack');
module.exports = {
	context: path.join(__dirname, './client'),
	entry: {
		html: './index.html',
		jsx: './index.js',
		js: './index.js',
		vendor: [
		'react',
		'react-dom'
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output : {
		path: path.resolve('dist'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [
		{
			test: /\.html$/,
			exclude: /node_modules/,
			loader: 'file?name=[name].[ext]'
		},
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loaders: [
			'babel-loader'
			]
		}
		],
	},
	externals: {
		"react-dom": 'ReactDOM',
	},
	plugins: [HtmlWebpackPluginConfig]
};