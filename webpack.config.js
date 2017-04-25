var path = require('path');

module.exports = {
  entry: './dev/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  watch: true,
  devtool: 'source-map',
  module: {
  	rules: [{
  		test:/\.js$/,
  		exclude: /node_modules/,
  		loader: 'babel-loader'
  	}]
  }
};