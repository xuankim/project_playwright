import {expect,test} from "@playwright/test"

test("Handel radio button", async({page})=>{
    await page.goto("https://artoftesting.com/samplesiteforselenium");
    const maleRadio = page.locator("#male");
    await maleRadio.check();
    await expect(maleRadio).toBeChecked();
})

//multi-select dropdown

test("Handle Multi Select Dropdown", async({page})=>{
    await page.goto("https://demoqa.com/select-menu");
    //await page.locator("#cars").selectOption('Opel');
    await page.locator("#cars").selectOption(['Volvo','Opel', 'Audi' ]);
})