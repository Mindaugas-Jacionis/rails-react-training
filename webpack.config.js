module.exports = {
  entry: "./app/assets/frontend/index.js",
  output: {
    path: __dirname + "/app/assets/javascripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
};
