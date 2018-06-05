const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC = path.resolve(__dirname, 'src');

module.exports = {
  entry: path.resolve(SRC, 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    modules: [SRC, 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      pages: path.resolve(SRC, 'pages'),
      'react-dev': path.resolve(SRC, 'react-dev'),
      'reach-router': path.resolve(SRC, 'reach-router'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
