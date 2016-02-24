module.exports = {
    entry: "./source/main.js",
    output: {
        path: "./build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
            	test: /\.js$/, 
            	loader: "babel-loader",
            	query: {
			        presets: ['react', 'es2015'] 
			    }
			}
		]
    }
};