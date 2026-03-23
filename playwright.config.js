// Import Playwright configuration
const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({

    // Test directory
    testDir: './tests',

    // Retry failed tests twice
    retries: 2,

    use: {

        // Base URL for UI tests
        baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',

        // Run browser without UI
        headless: false,

        // Screenshot on failure
        screenshot: 'only-on-failure',

        // Video for failed tests
        video: 'retain-on-failure',

        // Trace debugging
        trace: 'retain-on-failure'
    },

    reporter: [
        ['line'],
        ['html'],
        ['allure-playwright']
    ],

    projects: [
        { name: 'chromium', use: { browserName: 'chromium' } },
        { name: 'firefox', use: { browserName: 'firefox' } },
        { name: 'webkit', use: { browserName: 'webkit' } }
    ]

})