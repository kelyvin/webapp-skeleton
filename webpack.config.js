//Webpack requires this to work with directories
const path =  require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// This is main configuration object that tells Webpack what to do.
module.exports = {
    entry: ['./src/js/index.js', './src/css/main.css'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      writeToDisk:true
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'bundle.css'
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
        minify: true
      }),
      new HtmlWebpackPlugin({
        filename: '404.html',
        template: './public/404.html',
        minify: true
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    }
}
