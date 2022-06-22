const {shareAll, withModuleFederationPlugin} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mf-two',

  exposes: {
    './TwoModule': './projects/mf-two/src/app/two/two.module.ts',
  },

  shared: {
    ...shareAll({singleton: true, strictVersion: true, requiredVersion: 'auto'}),
  },
  // 自动共享本地的库,请不要忘记，
  // 在 Module Federation 中共享始终是一种选择：您需要将此设置添加到应该共享它的每个微前端。
  sharedMappings: ['my-lib'],
});
