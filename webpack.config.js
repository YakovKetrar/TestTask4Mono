const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[hash].js",
    },
    devServer: {
        port: 3000,
      },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.html"}),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                }
            },  
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                  {
                    loader: 'file-loader'
                  }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svgo-loader',
                  }
                ]
              }
        ]
    }
}
  