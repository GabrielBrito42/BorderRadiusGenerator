const path = require('path')

module.exports = [{
  name: 'normal',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './',
    inline: true
  },
  entry: {
    app: './public/script.js'
  },
  output: {
    publicPath: "http://localhost:8080/dist/",
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
}, {
  name: 'full-control',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './',
    inline: true
  },
  entry: {
    app: './public/scriptFull.js'
  },
  output: {
    publicPath: "http://localhost:8080/dist/",
    filename: 'mainFull.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
}
];