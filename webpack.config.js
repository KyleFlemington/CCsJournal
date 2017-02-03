module.exports = {
	entry: "./public/app.js",
	output: {
		path: __dirname + "/public",
		filename: 'bundle.js'
	},
	module: {
		loader: [
			{
				exclude: /(node_modules)/,
				loader: 'babel', 
				query: {
						presets: ['es2015', 'react']
				}
			}
		]
	},
	watch: true
}