const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./common');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputFile = '[name]';
const assetFile = '[name]';
// This specifies where the static files will be saved.
const assetPath = '/public/';

module.exports = (env) => {
  // Get envFile specified by "--env.envFile=" in "script" on package.json.
  // If nothing is specified, ".env.production" is used.
  const envFilePath = env ? `./env/.${env.file}` : './env/.production';

  return merge(
    commonConfig({ outputFile, assetFile, envFilePath, assetPath }),
    {
      mode: 'production',
      optimization: {
        minimizer: [
          // Optimize javascript code
          new TerserWebpackPlugin({
            terserOptions: {
              // Remove console from the code
              compress: { drop_console: true },
            },
          }),
          // Optimzie css code
          new OptimizeCssPlugin(),
          // clean the directory (except robot.txt)
          new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!robot.txt'],
          }),
        ],
      },
    }
  );
};
