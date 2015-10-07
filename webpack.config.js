module.exports = {
	context: __dirname + '/app',
	entry: './app.module.js',
	output: {
		path: __dirname + '/app',
		filename: 'app.core.js'
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel' },
			{ test: /\.html$/, loader: 'raw' },
			{ test: /\.css$/, loader: 'style!css' },
		]
	}
};