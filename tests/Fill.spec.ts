import {test} from "@playwright/test"

test("Fill press and PressSeq Practice", async ({page})=>{
    await page.goto("https://www.google.com");
    await page.getByRole('button', { name: 'Không quan tâm' }).click();
    await page.locator("#APjFqb").pressSequentially("Playwright",{delay:1000});
    await page.locator("#APjFqb").press("ArrowDown+ArrowDown+ArrowDown");
})