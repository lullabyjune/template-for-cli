const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = filePath => path.join(__dirname, '..', filePath)

module.exports = {
  entry: resolve('src/index.tsx'),
  output: {
    filename: '[name].[hash:8].js',
    path: resolve('dist'),
    publicPath: '/'
  },

  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include: resolve('src'),
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true
    })
  ]
}