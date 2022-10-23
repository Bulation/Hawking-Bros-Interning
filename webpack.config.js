const path = require('path');
const PugPlugin = require('pug-plugin');

const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    index: './src/pug/index.pug',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[contenthash].js',
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
      directory: path.join(__dirname, 'dist'),
    },
    watchFiles: {
      paths: ['src/**/*.*'], 
      options: {
        usePolling: true,
      },
    },
  },
  plugins: [
    new PugPlugin({
      extractCss: {
        filename: '[contenthash].css'
      },
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset/resource',
      }
    ],
  }
};