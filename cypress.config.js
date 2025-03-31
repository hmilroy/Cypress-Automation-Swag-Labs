// cypress.config.js
const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.js",
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      // Initialize Allure plugin
      allureWriter(on, config);
      return config;
    },
  },
  // Enable Allure in Cypress environment
  env: {
    allure: true,
  },
});
