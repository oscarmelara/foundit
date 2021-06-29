const webpack = require('webpack');
const path = require('path');
const rupture = require('rupture');
const nib = require('nib');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin('stylus-settings').use(webpack.LoaderOptionsPlugin, [
      {
        options: {
          stylus: {
            use: [rupture(), nib()],
            import: [
              resolve('src/styles/config.styl'),
              '~nib/lib/nib/index.styl',
              '~rupture/rupture/index.styl',
            ],
          },
        },
      },
    ]);
  },
};
