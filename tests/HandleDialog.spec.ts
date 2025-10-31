import {test, expect} from "@playwright/test" 

test("Handle Dialog", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", dialog =>{
        expect(dialog.type()).toEqual("alert");
        expect(dialog.message()).toEqual("I am a JS Alert");
        dialog.accept();
    })
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");

})

test("Handle Confirm Dialog", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog", dialog =>{
        expect(dialog.type()).toEqual("confirm");
        expect(dialog.message()).toEqual("I am a JS Confirm");
        dialog.dismiss();
    })
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
        
})