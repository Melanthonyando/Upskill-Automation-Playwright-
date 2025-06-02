// playwright.config.js
const { defineConfig } = require('@playwright/test');
const { devices } = require('@playwright/test');


module.exports = {
  projects: [
    {
      name: 'OrangeHRM',
      use: {
        baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
      },
    },
    {
      name: 'ICEHRM',
      use: {
        baseURL: 'https://icehrm-open.gamonoid.com/login.php',
      },
    },
  ],
  globalSetup: require.resolve('./tests/global-setup.js'),
  use: {
    storageState: 'storageState.json',
    headless: true,
  },
};
