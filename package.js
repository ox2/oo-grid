Package.describe({
  name: 'ox2:grid',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'DO NOT USE',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: ''
});

var C = 'client';
var S = 'server';
var CS = [C, S];

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    // Core
    api.use([
      'templating',
      'less'
    ]);
    // 3rd party
    api.use([

    ]);
    api.addFiles('lib/oo-grid.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:grid');
  api.addFiles('tests/package-tests.js');
});
