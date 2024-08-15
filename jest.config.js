module.exports = {
  roots: ['<rootDir>/test/jest'],
  testMatch: ['**/?(*.)+(spec|test).js?(x)'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/test/playwright/'],
}