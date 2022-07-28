var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist/',
    publicPath: '/'
  },
  plugins: [
    new CompressionPlugin()
  ]
};