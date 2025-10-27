import {test, expect} from "@playwright/test";

test.beforeEach(async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
})

test("Adding item to cart verification", async({page})=>{
    await page.getByText("Sauce Labs Backpack").click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator(".shopping_cart_link").click();
    await expect(page.getByRole('link', {name: 'Sauce Labs Backpack'})).toHaveText("Sauce Labs Backpack");
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await page.locator(".shopping_cart_link").click();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(page.getByRole('link',{name: 'Sauce Labs Backpack'})).not.toBeVisible();
})

test("Empty Cart verification", async({page})=>{
    await page.locator(".shopping_cart_link").click();
    await expect(page.locator('.inventory_item_name ')).not.toBeVisible();
})