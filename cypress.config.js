const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ricardooliver.github.io',
    experimentalRunAllSpecs: true,
    viewportWidth: 1024,
    viewportHeight: 768,
    mobile: {
      viewportWidth: 768, 
      viewportHeight: 812,
      projectId: "zngdff",
    },
    
    setupNodeEvents(on, config) {
    return config;
    },
  },
});


