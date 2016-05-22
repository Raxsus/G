// conf.js
exports.config = {
  framework: 'jasmine',
  baseUrl: 'http://localhost:8080',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/spec.js'],
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
}