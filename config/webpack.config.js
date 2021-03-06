var path = require('path')
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: 'index.js',
    libraryTarget: "umd",
    library: "remBaseFont"
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-2']
        }
      },
    ]
  },
  plugins: [
    new uglifyJsPlugin()
  ]
};