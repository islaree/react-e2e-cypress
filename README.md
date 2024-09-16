# E2E testing React applications with Cypress

## Cypress をインストールする

```bash
npm install cypress --save-dev
npx cypress open
```

### cypress.config.js

baseUrl と specPatern を追加する

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // ...
    baseUrl: "http://localhost:3000", // アプリケーションが実行されているURL
    specPattern: "cypress/e2e/**/*.cy.js", // テストファイルのパターン
  },
});
```
