import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import path from 'path';
import 'webpack-dev-server';
import { merge } from 'webpack-merge';

import webpackConfig from './webpack.config';

const config = merge(webpackConfig, {
  mode: 'development',
  devtool: 'eval',
  cache: true,
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    client: {
      overlay: true,
      progress: false,
    },
    compress: true,
    allowedHosts: 'all',
    historyApiFallback: true,
    hot: true,
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            plugins: [require.resolve('react-refresh/babel')],
          },
        },
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});

export default config;
