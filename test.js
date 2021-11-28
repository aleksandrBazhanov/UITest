const { test, expect } = require('@playwright/test');
const axios = require('axios');


test.describe('automationpractice test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://automationpractice.com/');
        await page.click('a[class="login"]');
        await page.fill('input[id="email"]', "god_s@mail.ru");
        await page.fill('input[id="passwd"]', "TestTest");
        await page.click('button[id="SubmitLogin"]');
    });

    test('Logout Test action by UI', async ({ page }) => {
        await page.click('a[class="logout"]');
        await expect(page.locator('a[class="logout"]')).toBeHidden();
        await expect(page.locator('a[class="login"]')).toBeVisible();
    });


});
