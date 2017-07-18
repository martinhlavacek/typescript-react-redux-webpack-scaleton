// requires
const parsedArgs = require('minimist')(process.argv);
const path = require('path');
const webpack = require('webpack');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const extractSassPlugin = new ExtractTextPlugin({
    filename: "[name].[chunkhash].css"
});

// Settings
const env = parsedArgs.env || 'dev';
const OUT_DIR = path.resolve(`./dist/${env}`);

// Plugins
let plugins = [
	new CleanWebpackPlugin([OUT_DIR], {
		root: path.resolve(__dirname, '../'),
		verbose: true,
		dry: false,
	}),
	new HtmlWebpackPlugin({template: './src/index.html'}),
	extractSassPlugin
];

if (env === 'prod') {
	plugins.push(new UglifyJSPlugin());
	plugins.push(new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		})
	)
}

// Devtool
const devtool = (env === 'dev') ? 'cheap-eval-source-map' : '';


// Main config
const config = {
	resolve: {
		extensions: ['.webpack.js', '.web.js', '.js', '.json', '.ts', '.tsx', '.css', '.scss']
	},
	entry: {
		app: './src/App.tsx'
	},
	output: {
		path: OUT_DIR,
		filename: `[name].[chunkhash].js`,
		publicPath: '/'
	},
	devtool: devtool,
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: extractSassPlugin.extract({
                	use: [{
						loader: 'css-loader'
					}, {
						loader: 'sass-loader'
					}],
					fallback: 'style-loader'
            	})
        	},
			{
				test: /\.(ts|tsx)$/,
				enforce: 'pre',
                loader: 'tslint-loader',
			},
			{
				test: /\.(ts|tsx)$/,
				use: 'ts-loader'
			},
			{
				test: /\.(jpg|jpeg|gif|png)/,
				use: 'url-loader?limit=5000'
			}
		]
	},
	plugins: plugins,
	devServer: {
  		contentBase: OUT_DIR,
		publicPath: '/',
  		compress: false,
  		port: 9020
	}
}

module.exports = config;
