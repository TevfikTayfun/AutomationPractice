// tests/basic-test.js

const {Builder} = require('selenium-webdriver');

(async function example() {
  const driver = new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.example.com');
    await driver.wait(until.titleIs('Example Domain'), 5000);
  } finally {
    await driver.quit();
  }
})();
