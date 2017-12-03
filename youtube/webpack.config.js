const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new Dotenv({
      path: './.env', // Path to .env file (this is the default) 
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'js'),
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    },
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/js/',
    port: 9090
  }
};
