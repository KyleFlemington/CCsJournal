module.exports = {
	entry: "./public/app.js",
	output: {
		path: __dirname + "/public",
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				exclude: /(node_modules)/,
				test   : /\.(js|jsx)$/,
				loaders: ['babel'],
				query: {
						presets: ['es2015', 'react']
				}
			}
		]
	},
	watch: true
}