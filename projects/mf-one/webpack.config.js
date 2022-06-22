const {shareAll, withModuleFederationPlugin} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mf-one',

  exposes: {
    './HomeModule': './projects/mf-one/src/app/home/home.module.ts',
    './HomeTwoModule': './projects/mf-one/src/app/home-two/home-two.module.ts'
  },

  shared: {
    ...shareAll({singleton: true, strictVersion: true, requiredVersion: 'auto'}),
  },

});
