const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'angular3',
  // library: { type: "var", name: "angular3" },
  exposes: {
    // './Component': './projects/mf-element/src/app/app.component.ts',
    './web-component': './projects/mf-element/src/bootstrap.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
