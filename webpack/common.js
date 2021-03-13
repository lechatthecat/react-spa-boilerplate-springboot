const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ outputFile, assetFile, envFilePath, assetPath }) => {
  return {
    entry: [
      path.resolve(__dirname, '../src/main/resources/pages/index.js'),
      path.resolve(__dirname, '../src/main/resources/pages/index.scss'),
    ],
    output: {
      path: path.resolve(__dirname, '../src/main/resources/static/public'),
      filename: 'js/[name].js',
      chunkFilename: 'js/[id].[chunkhash].js',
      publicPath: '/public/',
      pathinfo: false,
    },
    plugins: [
      // Extract css files
      new MiniCssExtractPlugin({
        filename: `./css/${outputFile}.css`,
      }),
      // Images are copied to the images folder as they are.
      new CopyWebpackPlugin({
        patterns: [
            { 
                from: path.resolve(__dirname, '../src/main/resources/assets/images'), to: path.resolve(__dirname, '../src/main/resources/static/public/assets/images'),
            }
        ]
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          // transpile
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Executed from bottom to top, so the order is important.
            // Extract as css files without bundling inside js files.
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Add prefixes automatically
            'postcss-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.css$/i,
          use: [
            // Executed from bottom to top, so the order is important.
            // Extract as css files without bundling inside js files.
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Add prefixes automatically
            'postcss-loader',
          ],
        },
        {
          // If you need other image file format, you have to add it here.
          test: /\.(png|svg|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `${assetFile}.[ext]`,
                outputPath: 'assets/images/',
                // Specify the path where the images will be saved.
                publicPath: `${assetPath}assets/images/`,
              },
            },
          ],
        },
        {
          test: /\.(ttf|woff2?)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `${assetFile}.[ext]`,
                outputPath: 'assets/fonts/',
                // Specify the path where the images will be saved.
                publicPath: `${assetPath}assets/fonts/`,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      // Enabling imports by absolute path
      alias: {
        '@js': path.resolve(__dirname, '../src/main/resources/js'),
        '@assets': path.resolve(__dirname, '../src/main/resources/assets'),
      },
      extensions: ['.js'],
    },
  };
};
