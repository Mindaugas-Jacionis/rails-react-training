module.exports = {
  entry: "./app/assets/frontend/index.js",
  output: {
    path: __dirname + "/app/assets/javascripts",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
          "autoprefixer-loader"
        ],
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    // open: true, // to open the local server in browser
    contentBase: __dirname + '/app/views/home/index.*'
  },
};
