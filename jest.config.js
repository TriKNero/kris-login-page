module.exports = {
  preset: 'jest-puppeteer',
  testTimeout: 30000,
  globals: {
    puppeteer: {
      launch: {
        headless: "old",
      },
    },
  },
};