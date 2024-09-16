const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000", // アプリケーションが実行されているURL
    specPattern: "cypress/e2e/**/*.cy.js", // テストファイルのパターン
  },
});
