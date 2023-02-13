const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:5500',
    experimentalRunAllSpecs: true,
    viewportWidth: 1024,
    viewportHeight: 768,
    mobile: {
      viewportWidth: 768, 
      viewportHeight: 812,
    },
    
    setupNodeEvents(on, config) {
    return config;
    },
  },
});


