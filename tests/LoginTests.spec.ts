import {test, expect} from "@playwright/test";

test("Ttile Verification",async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs")
})

test("Successfull Login Verification", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('#shopping_cart_container a')).toBeVisible();
})

test('Unsucessfull Login Verification', async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user_wrong");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('#shopping_cart_container a')).toBeVisible();
})