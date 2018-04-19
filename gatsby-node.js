const fs = require('fs-extra');
const path = require('path');
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

exports.onPostBootstrap = () => {
  fs.copySync(
    path.join(__dirname, '/src/locales'),
    path.join(__dirname, '/public/locales')
  );
};

exports.modifyWebpackConfig = (config, stage) => {
  const configuration = config;
  configuration.devtool = 'source-map';
  return config;
};
