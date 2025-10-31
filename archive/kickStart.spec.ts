import {test} from "@playwright/test";

test("kick Start with palyright",async({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();

})

test("Practice of Locator method with Options", async({page})=>{
    await page.goto("https://www.saucedemo.com/");

    await page.locator(".form_group",{has: page.locator("input#user-name")}).click();
    await page.locator(".form_group",{has: page.locator("input#user-name")}).pressSequentially("standard_user");

    await page.locator(".form_group", {hasNot: page.locator("input#user-name")}).click();
    await page.locator(".form_group", {hasNot: page.locator("input#user-name")}).pressSequentially("secret_sauce");

    await page.locator ("//input[@id='login-button']").click();

    //await page.locator("//a", {hasText: "Sauce Labs Backpack"}).click();

    await page.locator(".inventory_item_name", {hasNotText: /Sauce.*/}).click();
})