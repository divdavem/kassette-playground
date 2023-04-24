/**
 * Configuration of playwright
 *
 * @returns { import('@playwright/test').PlaywrightTestConfig } configuration
 */
exports.default = {
    testDir: 'tests',
    testMatch: /.*\.e2e-playwright-spec.ts$/,
    use: {
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        ...process.env.USE_PROXY ? {
            launchOptions: { proxy: {server: 'per-context'}},
            proxy: {server: 'http://127.0.0.1:4200'},
            serviceWorkers: 'block',
        } : {}
    },
    projects: [
        {name: 'Chromium', use: {browserName: 'chromium'}},
        {name: 'Webkit', use: {browserName: 'webkit'}},
        {name: 'Firefox', use: {browserName: 'firefox'}}
    ],
    webServer: [
        {
            command: `npm run serve`,
            port: 8080,
            timeout: 10 * 1000,
            reuseExistingServer: !process.env.CI
        },
        ...process.env.USE_PROXY ? [{
            command: `npm run proxy`,
            port: 4200,
            timeout: 10 * 1000,
            reuseExistingServer: !process.env.CI
        }] : []
    ]
};
