module.exports = {
  entry: './src/client/entry.jsx',
  output: {
    path: 'dist/',
    filename: 'js/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      { test: /\.css$/, loader: 'style!css' },
    ],
  },
  resolve: {
    extensions: ['', '.jsx', '.css', '.js'],
  },
};
