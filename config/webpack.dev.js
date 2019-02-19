const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    main: ["./src/index.js"]
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}