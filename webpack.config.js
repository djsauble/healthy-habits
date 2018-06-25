const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/register.html',
      filename: 'register.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/ride.html',
      filename: 'ride.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/signin.html',
      filename: 'signin.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/verify.html',
      filename: 'verify.html'
    }),
  ]
};
