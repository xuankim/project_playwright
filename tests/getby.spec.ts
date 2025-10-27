import {test} from "@playwright/test";

test("Practice of getBy methods",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/login");
    await page.getByLabel("Email:").fill("tesstcodeauto@gmai.com");
    await page.getByPlaceholder('Search store').fill("Mobile")

    //console.log(await page.getByText("New Cust", {exact: true}).textContent());
    console.log(await page.getByText("New Cust", ).textContent());
    await page.getByAltText("nopCommerce demo store").click();
    await page.getByTitle("Show products in category Electronics").first().click();
    await page.getByRole("button", {name: 'Search'}).click();
})

test("Practice of Locator method with Options", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByTestId("username").fill("testauto");
})