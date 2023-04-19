import {BrowserContext, expect, Page, test} from '@playwright/test';

test.describe.serial('Simple sanity to run during CI', () => {
    let context: BrowserContext;
    let page: Page;
    const TARGET_URL = process.env.PLAYWRIGHT_TARGET_URL || 'http://127.0.0.1:8080';

    test.beforeAll(async ({browser}) => {
        context = await browser.newContext({ignoreHTTPSErrors: true});
        page = await context.newPage();
    });

    test('should open browser and load the css', async () => {
        await page.goto(TARGET_URL);
        const output = await page.waitForSelector('#output', {timeout: 2000});
        expect(await output.innerHTML()).toBe('OK');
    });
});
