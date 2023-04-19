import { expect, test } from "@playwright/test";

test("should open browser and load the css", async ({ page }) => {
  await page.goto("http://127.0.0.1:8080");
  const output = await page.waitForSelector("#output", { timeout: 2000 });
  expect(await output.innerHTML()).toBe("OK");
});
