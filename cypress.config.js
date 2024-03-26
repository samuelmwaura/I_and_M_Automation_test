const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.imbankgroup.com/ke",
    viewportHeight:720,
    viewportWidth:1280,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
