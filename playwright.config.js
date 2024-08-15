const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './test/playwright',
  timeout: 30000,
  retries: 1,
  reporter: [['html', { outputFolder: 'playwright-report' }]],

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    baseURL: 'http://localhost:8081',
  },

  webServer: {
    command: 'npm run start',
    port: 8081,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
})