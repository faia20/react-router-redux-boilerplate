/* eslint-disable */
const path = require('path')

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, 'dist/client'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  plugins: []
}
