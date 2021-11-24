const { test, expect } = require('@playwright/test');
const playwright = require('playwright');
const axios = require('axios');


async function main() {
    const browser = await playwright.chromium.launch({
        headless: false
    });

    const page = await browser.newPage();
    await page.goto('http://automationpractice.com/');
    await page.click('a[class="login"]');
    await page.fill('input[id="email"]', "god_s@mail.ru");
    await page.fill('input[id="passwd"]', "TestTest");
    await page.click('button[id="SubmitLogin"]');

    //await page.goto('http://automationpractice.com/');

    axios({
        method: 'post',
        url: 'http://automationpractice.com/account/logout/'
    })
        .then(function (response) {
            response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });

    //await page.click('a[class="logout"]');
    //await expect(page.locator('a[class="logout"]')).toBeHidden();
    //await expect(page.locator('a[class="login"]')).toBeVisible();

}

main();

