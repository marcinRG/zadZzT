module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './app.js',
  output: {
    filename: 'app.js',
  },
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(templ|txt)$/i,
        use: [
          {
            loader: 'raw-loader',
          }
        ]
      },
    ],
  },
};
