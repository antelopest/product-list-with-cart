import path from 'path';
import { fileURLToPath } from 'url';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = process.env.NODE_ENV !== 'production';

export default {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
    publicPath: isDev ? '/' : '/product-list-with-cart/'
  },
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-source-map' : false,
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dict'),
      watch: true
    },
    port: 3000,
    open: true,
    hot: true,
    watchFiles: ['./src/**/', './src/index.html']
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer']
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: false
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: true
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   filename: '404.html'
    // }),
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: 'assets',
          noErrorOnMissing: true
        }
      ]
    })
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      '@config': path.resolve(__dirname, 'src/config'),
      '@services': path.resolve(__dirname, 'src/core/service'),
      '@component': path.resolve(__dirname, 'src/core/component'),
      '@module': path.resolve(__dirname, 'src/core/module'),
      '@container': path.resolve(__dirname, 'src/core/container'),
      '@appContainer': path.resolve(__dirname, 'src/container/container.js'),
      '@sharedModule': path.resolve(__dirname, 'src/modules/shared'),
      '@orderModule': path.resolve(__dirname, 'src/modules/order')
    }
  }
};
