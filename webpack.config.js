var path = require('path');

module.exports = {
  entry: './src/app.ts',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/,   loader: 'awesome-typescript-loader' }
    ]
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  }

};
