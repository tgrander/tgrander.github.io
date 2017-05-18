module.exports = {
  entry: './webpack/entry.js',
  output: {
    path: __dirname + "/assets/javascript/",
    filename: 'bundle.js'
  },
  module: {
  loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
    		test: /\.scss/,
    		loader: 'style!css!sass!postcss',
    		include: __dirname + 'webpack'
    	},
    	{
    		test: /\.css/,
    		loader: 'style!css!postcss',
    		include: __dirname + 'webpack'
    	}
    ]
  }
};
