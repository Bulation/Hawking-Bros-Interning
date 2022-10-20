const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PugPlugin = require('pug-plugin');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/pug/index.pug',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: 'bundle.js',
    assetModuleFilename: '[hash][ext][query]',
    clean: true,
  },
  devtool: !isProduction ? 'source-map' : false,
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    host: 'localhost',
    hot: true,
    static: {
      directory: path.join(__dirname, './src'),
    },
  },
  plugins: [
    new PugPlugin({
      extractCss: {
        filename: '[contenthash].css',
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(?:mp3|wav|ogg|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.pug$/,
        loader: PugPlugin.loader, 
        options: {
          method: 'render',
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader']
      },
    ],
  },
};