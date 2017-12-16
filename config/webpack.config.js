var path = require('path')
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: 'index.js',
    libraryTarget: "umd",
    library: "init-rem"
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015'
      },
    ]
  },
  plugins: [
    new uglifyJsPlugin()
  ]
};