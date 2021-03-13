const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./common');
const outputFile = '[name]';
const assetFile = '[name]';
const assetPath = '/public/';

module.exports = (env) => {
  // Get envFile specified by "--env.envFile=" in "script" on package.json.
  // If nothing is specified, ".env.development" is used.
  const envFilePath = env ? `./env/.${env.file}` : './env/.development';

  return merge(
    commonConfig({ outputFile, assetFile, envFilePath, assetPath }),
    {
      mode: 'development',
      devtool: 'inline-source-map',
      devServer: {
        contentBase: path.join(__dirname, '../src/main/resources/static/public'),
        // Which browser should be used. If "true" is specified, dafault browser in your system will be used.
        // open: "Google Chrome",
        host: 'localhost',
        compress: true,
        // port number is 8080 by default, if 8080 is used by other process, 8181 is used.
        // But Spring boot's tomcat will always use 8080.
        // port: 3000,
        watchOptions: {
          // This folder is ignored when the file differences are watched.
          ignored: /node_modules/,
        },
      },
    }
  );
};
