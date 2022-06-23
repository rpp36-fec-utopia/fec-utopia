module.exports = {
  mode: 'development',
  entry: __dirname + '/client/app.jsx'
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist/'
  }
};