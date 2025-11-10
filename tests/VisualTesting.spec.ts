import {test, expect} from "@playwright/test";

test.only("Visual Testing Verification", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/tables");
    await expect(page).toHaveScreenshot("FullNamePractice.png", {fullPage: true});
    await expect(page).toHaveScreenshot("MaskPage1.png", {mask: [page.locator("//table[@id='table1']//tbody//tr//td[4]")]});
})