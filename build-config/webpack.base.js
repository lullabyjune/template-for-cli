const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = filePath => path.join(__dirname, "..", filePath);

const publicPath = process.env.publicPath || "/";

module.exports = {
  entry: resolve("src/index.tsx"),

  output: {
    filename: "[name].[hash:8].js",
    path: resolve("dist"),
    publicPath: publicPath
  },

  devServer: {
    host: "localhost",
    port: 3000,
    historyApiFallback: true,
    hot: true
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        chunks: "initial",
        minChunks: 2
      },
      vendor: {
        test: /node_modules/,
        chunks: "initial",
        name: "vendor",
        priority: 10,
        enforce: true
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include: resolve("src"),
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      inject: true
    }),
    new CompressionWebpackPlugin({
      algorithm: "gzip",
      test: /\.js$/,
      threshold: 10240
    })
  ]
};
