var env = require('./environment.js');


// A small suite to make sure the cucumber framework works.
exports.config = {
  seleniumAddress: env.seleniumAddress,
  allScriptsTimeout: 11000,
  framework: 'cucumber',

  // Spec patterns are relative to this directory.
  specs: [
    'cucumber/*.feature', 'cucumber/priority_quote/*.feature'
  ],

  capabilities: env.capabilities,

  baseUrl: env.baseUrl,

  cucumberOpts: {
	    require: 'cucumber/stepDefinitions.js',
	    tags: '@dev',
	      format: 'summary',
	      report: '../public/report.html'
  }

};