const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const InlineChunkHtmlPlugin = require("./inlineSourcePlugin");
// const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const HtmlWebpackInlineSourcePlugin = require("@effortlessmotion/html-webpack-inline-source-plugin");

module.exports = {
  entry: "/src/ui.js",
  entry: {
    ui: "./src/ui.js", // The entry point for your UI code
    code: "./src/code.js", // The entry point for your plugin code
  },
  output: { path: path.resolve(__dirname, "dist") },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: ["/node_modules/", "/dist/"],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/ui.html",
      filename: "ui.html",
      inject: "body",
      inlineSource: ".(js)$",
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
};
