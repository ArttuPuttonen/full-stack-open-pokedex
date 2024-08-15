const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './test/playwright', // Directory where your Playwright tests are located
  timeout: 30000,
  retries: 1,
  reporter: [['list'], ['json', { outputFile: 'test-results.json' }]],

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    baseURL: 'http://localhost:3000', // Assuming your app runs on port 3000
  },

  webServer: {
    command: 'npm run start', // This command starts your development server
    port: 3000, // Port where your app runs
    timeout: 120 * 1000, // Wait for up to 120 seconds for the server to start
    reuseExistingServer: !process.env.CI, // Do not start a new server if one is already running
  },
})